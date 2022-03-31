import {useState} from 'react'
import './style.css'

import Buscar from '../../service/api'

//Components
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import ProductCard from '../../components/ProductCard'

const Home = ()=> {
  const [valueInput, setValueInput] = useState("")
  const [productReturn, setProductReturn] = useState()

  const [loadCard, setLoadCard] = useState(false)

  const [spanError,setSpanError] = useState("display-error")

  const handleClick = async () =>{
    setLoadCard(true)
    if(valueInput === ""){
      setLoadCard(false)
      setSpanError("")
    }else{
      setSpanError("display-error")
      setLoadCard(true)
      try{
        let answer = await Buscar(valueInput.toLowerCase())
        
        if(answer.httpStatusCode === '500'){
          setLoadCard(false)
          setSpanError("")
        }else{
          setProductReturn(answer.products)
          setSpanError("display-error")
          setLoadCard(false)
        }
      }catch(error){
        setSpanError("")
        setLoadCard(false)
        console.log(error)
      }
    }
  }

  return (
    <main className="main-home">
      <section className="section-main-home">
        <p>Buscar produto: </p>
        <input type="text" value={valueInput} onChange={ e => setValueInput(e.target.value)}/>
        <Button onClick={handleClick} name="Buscar"/>
        <span className={`span-error ${spanError}`}>Nome incorreto</span>
      </section>
      <section>
        {loadCard ?
          <Loading/>
        :
          productReturn &&
          <section className="section-productCard">
            {productReturn.map((product,i) =>(
              <ProductCard
                key={i}
                name={product.name}
                type={product.type}
                id={product.id}
                score={product._meta.score}
                visits={product._meta.visitsClickCount}
              />
            ))}
          </section>
        }
      </section>
    </main>
  )
}

export default Home