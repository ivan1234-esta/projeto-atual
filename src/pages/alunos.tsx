import Cabecalho from "../components/cabecalho";
import { Link } from "react-router-dom";

function Alunos(){
    return(
        <div>
            <Cabecalho/>
            Pagina sobre alunos 
            <Link to="/alunoDetalhe/João/7/Clara e João" className='nav-link'><div className="sb_alunos">Aluno Jõao</div></Link>
            <Link to="/alunoDetalhe/Denis/10/Leandro e Leia" className='nav-link'><div className="sb_alunos">Aluno Denis</div></Link>
            <Link to="/alunoDetalhe/Ana/12/Carlos e Bia" className='nav-link'><div className="sb_alunos">Aluna Ana</div></Link>

        </div>
    )
}
export default Alunos;