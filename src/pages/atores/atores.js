import React from 'react'
import './atores.css'

import Banner from '../../components/banner/banner'
import a_Jake from '../../assets/img/a_Jake.jpg';
import a_Neytiri from '../../assets/img/a_Neytiri.jpg';
import a_Kiri from '../../assets/img/a_Kiri.jpg';
import a_Quaritch from '../../assets/img/a_Quaritch.jpg';
import a_Ronal from '../../assets/img/a_Ronal.jpg';
import a_Tonowari from '../../assets/img/a_Tonowari.jpg';
import a_Tuk from '../../assets/img/a_Tuk.jpg';
import a_Loak from '../../assets/img/a_Loak.jpg';
import a_Neteyam from '../../assets/img/a_Neteyam.jpg';
import a_Spider from '../../assets/img/a_Spider.jpg';
import a_Tsireya from '../../assets/img/a_Tsireya.jpg';
import a_Aonung from '../../assets/img/a_Aonung.jpg';



function Atores(){
    return (
        <>
        <Banner page/>
        <div className='paginas'>
            <h1>Atores - Avatar 2, O Caminho da Água</h1>
            <p>Personagens e atores na vida real (comparativo)</p>
            <div id="atores">
            <div class="ator">
                <img src={a_Jake} />
                <span>Jake Sully - Sam Worthington</span>
            </div>
    
            <div class="ator">
                <img src={a_Neytiri} />
                <span>Neytiri - Zoe Saldaña</span>
            </div>
    
            <div class="ator">
                <img src={a_Kiri} />
                <span>Kiri - Sigourney Weaver</span>
            </div>
    
            <div class="ator">
                <img src={a_Quaritch} />
                <span>Quaritch - Stephen Lang</span>
            </div>
    
            <div class="ator">
                <img src={a_Ronal} />
                <span>Ronal - Kate Winslet</span>
            </div>
    
            <div class="ator">
                <img src={a_Tonowari} />
                <span>Tonowari - Cliff Curtis </span>
            </div>
    
            <div class="ator">
                <img src={a_Tuk} />
                <span>Tuk - Trinity Jo-Li </span>
            </div>
    
            <div class="ator">
                <img src={a_Loak} />
                <span>Lo'ak - Britain Dalton </span>
            </div>
    
            <div class="ator">
                <img src={a_Neteyam} />
                <span>Neteyam - Jamie Flatters </span>
            </div>
    
            <div class="ator">
                <img src={a_Spider} />
                <span>Spider - Jack Champion </span>
            </div>
    
            <div class="ator">
                <img src={a_Tsireya} />
                <span>Tsireya - Bailey Bass </span>
            </div>
    
            <div class="ator">
                <img src={a_Aonung} />
                <span>Aonung - Filip Geljo </span>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Atores