import ItemLista from "./item_lista";

function Listas(){
    let ListaSimples = ['Ivan David', 'Lucas Lima','Pablo Machado','Tereza Cristina'];
    let ListaObj = [
        {name:'Paulo Vinicius', age:'34'},
        {name:'Camila Ferreira', age:'30'},
        {name:'Matheus Rodrigues', age:'27'},
        {name:'João Lucas', age:'20'}
    ]
    return(
        <div>
            <hr/>
            Componente Listas
            <hr/>
            <h2>Lista Simples</h2>
            <ul>
                {ListaSimples.map((item, index) =>(
                    <li key = {index}>{item}</li>
            
                ))}
            </ul>
            <ol>
                {ListaObj.map((item, index) =>(
                   <ItemLista dados={item}/>
                ))}
            </ol>
        </div>
    )
}
export default Listas
