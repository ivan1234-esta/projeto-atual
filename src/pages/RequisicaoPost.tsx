import { Usuarios } from "../types/usuarios";
import { ChangeEvent, useState } from "react";
import { ModuloApi, } from "../api";

function RequisicaoPost() {
    const [addTitulo, setAddTitulo] = useState('');
    const [addDetalhe, setAddDetalhe] = useState('');
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(false);

    const HandleChangeTitulo = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitulo(e.target.value);
    }

    const HandleChangeDetalhe = (e: ChangeEvent<HTMLInputElement>) => {
        setAddDetalhe(e.target.value);
    }

    const carregarUsuarios = async () => {
        setLoading(true);
        setUsuarios([]);
        const json = await ModuloApi.CarregarUsuarios();
        const dataArray = Array.isArray(json) ? json : [json];
        setLoading(false);
        setUsuarios(dataArray); 
    }

    // const AdicionarUsuarios = async () => {
    //     if(addTitulo && addDetalhe){
    //         let json = await
    //         ModuloApi.AdicionarUsuario(addTitulo,addDetalhe, 1);
    //         if(json.id){
    //             alert('Usuario adicionado com sucesso!')
    //             setUsuarios((usuarios) => [...usuarios, json]);
    //         } else{
    //             alert('Ocorreu Alguma falha')
    //         }
    //     }else{
    //         alert('Preencha as informações');
    //     }
    // }

    

    return (
    <div>
            {/* <h1>Cadastro Doador</h1>
            <input type="text" onChange={HandleChangeNome} placeholder="Nome Completo" />
            <br /><br />
            <input type="email" onChange={HandleChangeEmail} placeholder="Informe seu melhor email" />
            <br/>
            <br /><br />
            <input type="number" onChange={HandleChangeTelefone} placeholder="Informe seu Numero de Contato" />
            <br/>
            <br /><br />
            <input type="password" onChange={HandleChangeSenha} placeholder="Crie sua Senha" />
            <br/>
            <br /><br />
            <input type="date" onChange={HandleChangeDataNascimento} placeholder="Detalhe do Item" />
            <br/>
            <br /><br />
            <input type="text" onChange={HandleChangeTipoSanguineo} placeholder="Detalhe do Item" />
            <br/>
            <br/>
            <button onClick={AdicionarUsuarios}>Criar Cadastro</button>

            {loading && 
            <div>Carregando Conteudo...</div>
            }
            {!loading &&
              <div>
                <h1>Consulta de Informações</h1>
                <button onClick={carregarUsuarios}>Carregar</button>
              </div>
            }
            <h1>Lista de Usuarios</h1>
            {usuarios.map((item, index) => (
                <div key={index}>
                    <h2>Dados do Usuario</h2>
                    Titulo: {item.title}
                    <br/>
                    Identificação: {item.userId}
                </div>
            ))} */}
        </div>
    )
}

export default RequisicaoPost;
