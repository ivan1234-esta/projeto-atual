import React from 'react'
import Home from './pages/home';
import '../src/estilo/style.css';
import { Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre';
import Adm from './pages/adm';
import Login from './pages/login';
import Cadastrar from './pages/cadastro';
import Alterar_Dados from './pages/alterar_dados';
import Contato from './pages/contato';
import Notfound from './pages/notfound';
import Detalhe from './pages/detalhe';
import Professores from './pages/professores';
import Alunos from './pages/alunos';
import AlunoDetalhe from './pages/alunoDetalhe';
import Eventos from './pages/evento_onclick';
import Pai from './pages/pai';
import Info from './pages/info_props';
import Listas from './pages/listas';
import ItemLista from './pages/item_lista';
import Quiz from './pages/quiz';
import Condicao from './pages/condicao'
import Requisicoes from './pages/requisicoes';
import RequisicoesTypes from './pages/requisicoes';
import RequisicoesTypesAsync from './pages/requisicoes_async';
import RequisicaoPost from './pages/RequisicaoPost';
import RequisicaoForm from './pages/RequisicaoForm';



function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/adm' element={<Adm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastrar/>}/>
        <Route path='/alterar_dados' element={<Alterar_Dados/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/detalhe/:codigo' element={<Detalhe/>}/>
        <Route path='/professores' element={<Professores/>}/>
        <Route path='/alunos' element={<Alunos/>}/>
        <Route path='/alunoDetalhe/:nome/:idade/:pais' element={<AlunoDetalhe/>}/>
        <Route path='/evento_onclick' element={<Eventos/>}/>
        <Route path='/pai' element={<Pai/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/listas' element={<Listas/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/condicao' element={<Condicao/>}/>
        <Route path='/requisicao' element={<RequisicoesTypes/>}/>
        <Route path='/requisicao_async' element={<RequisicoesTypesAsync/>}/>
        <Route path='/requisicao_post' element={<RequisicaoPost/>}/>
        <Route path='/requisicao_form' element={<RequisicaoForm/>}/>





      </Routes>

    </div>
  );
}

export default App;
