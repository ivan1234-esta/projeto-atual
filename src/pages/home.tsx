import { type } from "@testing-library/user-event/dist/type";
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";


function Home(){
    return(
        <div>
            <Cabecalho />
            pagina Home
            <Rodape/>
        </div>
    )
}
export default Home;