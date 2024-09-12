import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import { Link } from "react-router-dom";
import { Produto } from "../types/produtos";
import ListData from "../components/itemLista/itemList";

function RequisicoesTypes (){
    const[produtos, setProdutos] = useState<Produto[]>([]);

    const carregarProdutos = () => {
        fetch("https://fakestoreapi.com/products/")
        .then((response) => {
            return response.json();

        })
        .then((json) => {
            setProdutos(json)
        })
    }
    return(
<div>
    <Cabecalho/>
    <h1>Pagina Exemplo de Requisições</h1>
    <hr/><br/>
    <button onClick={carregarProdutos}>Carregar Produtos</button>
    <br/>
    Total De Produtos: {produtos.length};
    <br/>
    <h2>Lista De Produtos</h2>
    <div className="carousel">
            {produtos.map((item, index) =>(
                   <ListData dado = {item}/>
                ))}
    </div>    

</div>
)}
export default RequisicoesTypes
