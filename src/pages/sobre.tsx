import { Link } from "react-router-dom";
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

function Sobre(){
    return(
        <div>
            <Cabecalho/>
            <div className="sb_container">
            <Link to="/professores" className='nav-link'><div className="sb_professores">Professores</div></Link>
            <Link to="/alunos" className='nav-link'><div className="sb_alunos">Alunos</div></Link>
       

                
            </div>
            pagina sobre
            <Rodape/>
            
        </div>
    )
}
export default Sobre;