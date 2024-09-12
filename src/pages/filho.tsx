
type Props = {
    Texto: String;
    onClickFN:(data:string) => void;
}

function Filho (parametros: Props){

  function HandleClick(){
    parametros.onClickFN('Amo o papai')
  }
    return(
        <div>
            <hr/>
            Componente Filho
            <hr/>
            A prop Texto = {parametros.Texto}
            <br/>
            <button onClick={HandleClick}>Botão Filho</button>
        </div>
    )
}

export default Filho;