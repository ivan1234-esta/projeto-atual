import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";
import {useParams} from "react-router-dom";

function AlunoDetalhe(){
    const Parametro = useParams() ;

    return(
        <div>
            <Cabecalho titulo="Essa é minha pagina de Contato"/>
            Olá aluno {Parametro.nome}, como você tem apenas {Parametro.idade} anos, 
            vamos ter que chamar seus pais {Parametro.pais} na reunião de classnamee.
            <Rodape/>
        </div>
    )
}
export default AlunoDetalhe;

