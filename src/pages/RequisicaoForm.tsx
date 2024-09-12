import { Usuarios } from "../types/usuarios";
import { ChangeEvent, useState } from "react";

function RequisicaoForm() {
    const [addNome, setAddNome] = useState('');
    const [addBorn, setAddBorn] = useState('');
    const [addBlood, setAddBlood] = useState('');
    const [addContat, setAddContat] = useState('');
    const [usuarios, setUsuarios] = useState<Usuarios[]>([]);

    const HandleChangeNome = (e: ChangeEvent<HTMLInputElement>) => {
        setAddNome(e.target.value);
    }

    const HandleChangeBorn = (e: ChangeEvent<HTMLInputElement>) => {
        setAddBorn(e.target.value);
    }

    const HandleChangeBlood = (e: ChangeEvent<HTMLInputElement>) => {
        setAddBlood(e.target.value);
    }

    const HandleChangeContat = (e: ChangeEvent<HTMLInputElement>) => {
        setAddContat(e.target.value);
    }

    const carregarUsuarios = async () => {
        setUsuarios([]);
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        const dataArray = Array.isArray(json) ? json : [json];
        setUsuarios(dataArray); 
    }

    const HandleAddUsuario = async () => {
        if (addNome && addBorn && addBlood && addContat) {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    nome: addNome,
                    nascimento: addBorn,
                    tipo_sanguine: addBlood,
                    telefone: addContat
                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });

            if (!response.ok) {
                console.error('Erro ao adicionar o item');
            } else {
                console.log('Item adicionado com sucesso');
            }
        }
    }

    return (
        <div>
            <h1>Cadastro de Usuarios</h1>
            <input type="text" onChange={HandleChangeNome} placeholder="Nome Completo" />
            <br /><br />
            <input type="text" onChange={HandleChangeBorn} placeholder="Informe sua data de nascimento" />
            <br /><br/>
            <input type="text" onChange={HandleChangeBlood} placeholder="Sabe seu tipo sanguineo?" />
            <br /><br/>
            <input type="text" onChange={HandleChangeContat} placeholder=" Telefone de Contato" />
            <br/>
            <br/>
            <button onClick={HandleAddUsuario}>Adicionar</button>

            <h1>Consulta de Informações</h1>
            <button onClick={carregarUsuarios}>Carregar</button>

            <h1>Lista de Usuarios</h1>
            {usuarios.map((item, index) => (
                <div key={index}>
                    <h2>Dados do Usuario</h2>
                    Titulo: {item.title}
                    <br/>
                    Identificação: {item.userId}
                </div>
            ))}
        </div>
    )
}

export default RequisicaoForm;
