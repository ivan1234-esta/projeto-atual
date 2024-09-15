import { Usuarios } from "../types/usuarios";
import { ChangeEvent, useState } from "react";
import { ModuloApi, } from "../api";
 

function RequisicaoPost() {
    const [addNome, setAddNome] = useState('');
    const [addEmail, setAddEmail] = useState('');
    const [addTelefone, setAddTelefone] = useState('');
    const [addSenha, setAddSenha] = useState('');
    const [addDataNascimento, setAddDataNascimento] = useState('');
    const [addTipoSanguineo, setAddTipoSanguineo] = useState('');
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);
    const [loading, setLoading] = useState(false);

    const HandleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
        setAddNome(e.target.value);
    }

    const HandleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setAddEmail(e.target.value);
    }

    const HandleChangeTelefone = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTelefone(e.target.value);
    }

    const HandleChangeSenha = (e: ChangeEvent<HTMLInputElement>) => {
        setAddSenha(e.target.value);
    }

    const HandleChangeDataNascimento = (e: ChangeEvent<HTMLInputElement>) => {
        setAddDataNascimento(e.target.value);
    }

    const HandleChangeTipoSanguineo = (e: ChangeEvent<HTMLSelectElement>) => {
        setAddTipoSanguineo(e.target.value);
    }

    const carregarUsuarios = async () => {
         setLoading(true);
        setUsuarios([]);
        const json = await ModuloApi.CarregarUsuarios();
        const dataArray = Array.isArray(json) ? json : [json];
        setLoading(false);
        setUsuarios(dataArray); 
     }

    const AdicionarUsuarios = async () => {
        if (addNome && addEmail && addTelefone && addSenha && addDataNascimento && addTipoSanguineo) {
            const sucesso = await ModuloApi.AdicionarUsuario(
                addNome, 
                addEmail, 
                addTelefone, 
                addSenha, 
                addDataNascimento, 
                addTipoSanguineo
            );
    
            if (sucesso) {
                alert('Usuario adicionado com sucesso!');
            } else {
                alert('Ocorreu Alguma falha');
            }
        } else {
            alert('Preencha as informações');
        }
    }
    return (
            <div className="container">
              <div className="form-wrapper">
              <div className="image">
                  <img src="doador.png" alt="Ilustração Doação" />
                </div>
                <div className="form">
                  <h3 className="tit_cads">Seja Bem-vindo(a)!<br/>Cadastre-se aqui:</h3>
                  <p className="sub_tit_cads">Digite seus dados para criar sua conta:</p>
                  <input type="text" onChange={HandleChangeNome} placeholder="Nome Completo" />
                  <input type="email" onChange={HandleChangeEmail} placeholder="Informe seu melhor email" />
                  <input type="text" onChange={HandleChangeTelefone} placeholder="Informe seu telefone" />
                  <input type="password" onChange={HandleChangeSenha} placeholder="Crie sua Senha" />
                  <div className="date-container">
                    <span>Data de Nascimento</span>
                    <input type="date" onChange={HandleChangeDataNascimento} />
                  </div>
                  <select onChange={HandleChangeTipoSanguineo} value={addTipoSanguineo}>
                    <option value="">Selecione o Tipo Sanguíneo</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="não informado">Não Sei</option>
                  </select>
                  {loading && <div>Carregando Conteudo...</div>}
                  {!loading && <button className="btn_form" onClick={AdicionarUsuarios}>Criar Cadastro</button>}
                </div>
              </div>
            </div>
          );
          
}

export default RequisicaoPost;
