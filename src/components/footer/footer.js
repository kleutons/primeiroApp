import { Link } from 'react-router-dom';
import './footer.css'

import logo from '../../assets/img/logo.png';

function Footer(){

    return ( 
        <>
        <footer>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/atores'>Atores</Link></li>
                    <li> <Link to='/comentarios'>Comentários</Link> </li>
                    <li> <Link to='/contato'>Contato</Link> </li>
                </ul>
            </nav>

            <Link to='/'>
                <img src={logo}  alt='Pagina Inicial' id='logo' />
            </Link>
            <span>© Todos os direitos reservados</span>
            <span>Desenvolvido por: Kleuton Novais</span>
        </footer>
        <div class="copy">*Este site foi criado como exemplo de portfólio e não tem como objetivo a venda de ingressos. O conteúdo apresentado é apenas ilustrativo e não representa qualquer transação comercial. É importante ressaltar que os direitos do filme são parte integrante do produtor e não estão disponíveis para comercialização neste site.
        </div>
        </>
    )
}

export default Footer