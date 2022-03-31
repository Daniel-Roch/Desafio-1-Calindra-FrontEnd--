export default async function Buscar(value){
    return await fetch(`https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=${value}&source=nanook`)
    .then(res => res.json())
    .then(json => json)
    .catch(error => error)
}