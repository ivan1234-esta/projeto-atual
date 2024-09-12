type Props = {
    dados: {
        name: String;
        age: String;
    }
}

function ItemLista({dados}:Props){
    return(
        <div>
          <h2>Lista de componentes</h2>  
        <hr/>
        Meu nome é:{dados.name}
        <div className="itemLista"></div>
        Minha Idade é: {dados.age}
        </div>

    )
}

export default ItemLista