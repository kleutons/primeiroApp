import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import './style.css'

import logo from '../../assets/img/logo.png';

function Header(){
    
    const {login, setLogin} = useContext(UserContext);

    return ( 
        <header>
            <Link to='/'>
            <img id='logo' src={logo} alt='Logo Avatar'/>
            </Link>
            <nav>
                <ul>
                    <Link to='/'>
                    <li>Home</li>
                    </Link>
                    <Link to='/atores'>
                    <li>Atores</li>
                    </Link>
                    <Link to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                    <Link to='/contato'>
                    <li>Contato</li>
                    </Link>
                    <li onClick={() => setLogin(!login)}> {(login ? 'Deslogar' : 'Login')}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header