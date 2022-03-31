import './style.css'

const ProductCard = ({name,type,id,score,visits}) => {
  return (
    <div className="div-card-product">
      <h1>Nome: {name}</h1>
      <p>Type: {type}</p>
      <p>Id: {id}</p>
      <p>Ponto: {score}</p>
      <p>Numero Total de Visitas: {visits}</p>
    </div>
  )
}
export default ProductCard