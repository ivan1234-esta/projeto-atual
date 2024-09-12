import Filho from "./filho";
import Info from "./info_props";

function Pai (){

    function eventActionButtonPai(txt:string){
        alert('Pai: Alerta Disparado '+ txt)
    }

    function eventActionButtonInfo(){
        alert('Pai: Informações sendo passadas ')
    }
    return(
        <div>
            <hr/>
             Componente Pai
            <hr/>
            <Filho Texto='Texto passado pela props'
            onClickFN={eventActionButtonPai}/>
            <hr/>
            <Info Texto='Informações passadas por props'
            onClickInfo={eventActionButtonInfo}/>
            <hr/>
            <br/>
            
            <hr/>
        </div>

    )
}

export default Pai;