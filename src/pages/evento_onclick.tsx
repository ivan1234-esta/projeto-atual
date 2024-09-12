
import React, { useState } from "react";

function Eventos(){
// Variaveis

//Variaveis Controladas por States
const[numero, setNumero] = useState(0);
const[nome, setNome] = useState('');
const[email, setEmail] = useState('');
const[telefone, setTelefone] = useState('');



//Funções Handle
function HandleButtonClickSomar(){
    setNumero(numero + 1);
}

function HandleInputNome(event:React.ChangeEvent<HTMLInputElement>){
    setNome(event.target.value);
    alert(nome)
}

function HandleInputEmail(event:React.ChangeEvent<HTMLInputElement>){
    setEmail(event.target.value);
}

function HandleInputTelefone(event:React.ChangeEvent<HTMLInputElement>){
    setTelefone(event.target.value);
}

function HandleButtonClickSubitrair(){
    if(numero > 0){
    setNumero(numero - 1)
    }
}

const Alerta = () => {
    alert("variavel recebe função oculta")
}

return(
    <div>
        O numero é {numero}
        <br/>
        <button onClick={() => {alert('caiu aqui')}}>Alert</button>
        <button onClick={HandleButtonClickSomar}>Somar</button>
        <button onClick={HandleButtonClickSubitrair}>Subitrair</button>
        <button onClick={Alerta}>Var  Fn</button><br/>

        <input type="text" onChange={HandleInputNome}  placeholder="Nome"/><br/>
        <input type="text" onChange={HandleInputEmail} placeholder="Email"/><br/>
        <input type="text" onChange={HandleInputTelefone} placeholder="Telefone"/><br/>

         Meu nome é {nome}, meu email é {email} e meu telefone é {telefone}

    </div>
)
}
export default Eventos;