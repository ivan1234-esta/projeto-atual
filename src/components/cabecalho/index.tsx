import { type } from '@testing-library/user-event/dist/type';
import { Link } from 'react-router-dom';
import '../../estilo/style.css'

type Props = { 
   titulo?:string
}
function Cabecalho(valores:Props){
return(
<div>
   {valores.titulo}
   <nav className='navbar' >
      <div className='container'>
            <ul className='navbar-nav'>
               <li className='nav-item'><Link to="/" className='nav-link' aria-current="page">Home</Link></li>
               <li className='nav-item'><Link to="/sobre" className='nav-link' aria-current="page">Sobre</Link></li>
               <li className='nav-item'><Link to="/cadastro" className='nav-link' aria-current="page">Cadatro</Link></li>
               <li className='nav-item'><Link to="/contato" className='nav-link' aria-current="page">Contato</Link></li>
               <li className='nav-item'><Link to="/detalhe/123" className='nav-link' aria-current="page">Detalhe</Link></li>

            </ul>
      </div>
   </nav>
</div>
)
}
export default Cabecalho;