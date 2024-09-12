import { useState } from "react";

function Condicao(){
    const [exibir,setExibir] = useState(false);

    function HandleClick(){
            setExibir(!exibir)
        }
    

    return(
        <div>
            Conteudo Condicional
            <hr/>
            <button onClick={HandleClick}>Mostrar</button>
            {exibir? "Ocultar": "Mostrar"}
            {exibir === true && 
            <div>
                Este texto só será exibido se o show for = True    
            </div>
            }
        </div>
    )

}
export default Condicao