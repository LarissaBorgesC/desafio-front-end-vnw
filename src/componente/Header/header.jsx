import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import livro from '../../assets/livro.png' ;
import Busca from '../../assets/B.png'
import Doados from '../Pages/Doados/Doados' ;
import QueroDoar from '../Pages/QueroDoar/QueroDoar';
import Inicio from '../Pages/Inicio/Inicio'
import S from './header.module.scss'

export default function header(){
    return (
        <>
        <BrowserRouter>
        <header>
            <section className={S.boxlogo}>
                <img src={livro} alt="Livro" className={S.boxlivro}/>
                <h1>Livros Vai na Web</h1>
                </section>
            <nav className={S.boxpainel}>
                <ul>
                    <li> <Link to='/'>Início</Link> </li>
                    <li> <Link to='/Doados'> Livros Doados </Link></li>
                    <li> <Link to='QueroDoar'> Quero Doar </Link> </li>
                </ul>
            </nav>
                <div className={S.boxbuscar}>
                    <input type="text" id="busca" placeholder="O que você procura?" className={S.boxprocura}/>
                    <img src={Busca} alt="busca" className={S.boximgbusca} />
                </div>

            
        </header>
        <Routes>

            <Route path='/' element={<Inicio/>}/>
            <Route path='/Doados' element={<Doados/>}/>
            <Route path='/QueroDoar' element={<QueroDoar/>}/>


        </Routes>
        </BrowserRouter>
        </>
    )
}