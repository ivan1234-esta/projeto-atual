
type Props = {
    Texto?: String;
    onClickInfo?:() => void;
}

function Info (parametros: Props){

  
    return(
        <div>
            <hr/>
            Informações passadas por props
            <hr/>
            A prop Texto = {parametros.Texto}
            <br/>
            <button onClick={parametros.onClickInfo}>Botão Info</button>
        </div>
    )
}

export default Info;