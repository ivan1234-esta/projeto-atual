import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import {useParams} from "react-router-dom";

function Detalhe(){
    const Parametro = useParams() ;
    return(
        <div>
            <Cabecalho titulo="Essa é minha pagina de Contato"/>
            Essa é a pagina detalhe que recebe o parametro {Parametro.codigo}
            <Rodape/>
        </div>
    )
}
export default Detalhe;