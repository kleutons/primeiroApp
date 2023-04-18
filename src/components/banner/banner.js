import './banner.css'

import logo from '../../assets/img/logo.png';
import Button from '../button/button';

function Banner({page}){
    return ( 
        <>
        <div id="banner" className={page ? 'page' : ''} >
            <div class="logo-content">
                <img src={logo}  alt='logo avatar' />

                {!page ? <Button name='Comprar Ingresso*'  /> : ''}
            </div>
        </div>
        </>
    )
}

export default Banner