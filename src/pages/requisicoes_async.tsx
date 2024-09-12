import { useState } from "react";
import Cabecalho from "../components/cabecalho";
import { Link } from "react-router-dom";
import { Produto } from "../types/produtos";
import ListData from "../components/itemLista/itemList";

function RequisicoesTypesAsync() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(false);

    const carregarProdutos = async () => {
        setLoading(true);
        try {
            setProdutos([]);
            let response = await fetch("https://fakestoreapi.como/products/");
            let json = await response.json();

            const dataArray = Array.isArray(json) ? json: [json]
            setLoading(false);
            setProdutos(dataArray); 
        } catch (error) {
            setLoading(false);
            alert('Falha ao carregar os produtos.Tente novamente mais tarde')
            console.error(error);
        } 
    }
    return (
        <>
            <Cabecalho />
            {loading ? (
                <div>Carregando Conteúdo...</div>
            ) : (
                <div>
                    <h1>Página Exemplo de Requisições</h1>
                    <hr /><br />
                    <button onClick={carregarProdutos}>Carregar Produtos</button>
                    <br />
                    Total de Produtos: {produtos.length}
                    <br/>
                    <h2>Lista De Produtos</h2>
                    <div className="carousel">
                            {produtos.map((item, index) =>(
                                <ListData dado = {item}/>
                                ))}
                    </div>    
                </div>
            )}
        </>
    );
}

export default RequisicoesTypesAsync;
