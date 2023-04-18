import React from 'react'
import Banner from '../../components/banner/banner';
import video from '../../assets/video/trailer.mp4';
import './home.css';
import Button from '../../components/button/button';


function Home(){
    return (
        <>
        <Banner />
        <div id="trailer-container">
            <div className="content">
                <video controls className="trailer">
                    <source src={video} type="video/mp4" />
                    Seu Navegador não posui suporte para vídeos
                </video>
                <div id="sinopse">
                    <p>
                        Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.
                        <br />
                        <b>Data de lançamento:</b> 15 de dezembro de 2022 (Brasil)
                        <br />
                        <b>Diretor:</b> 
                        <a href="https://pt.wikipedia.org/wiki/James_Cameron"> James Cameron</a>
                    </p>
                </div>
            </div>
        </div>


        <div class="actor-cards-container">
            <div class="cards-content">
                <div class="card banner-1"> Sam Worthington - Jake Sully </div>
                <div class="card banner-2"> Zoë Saldaña - Neytiri </div>
                <div class="card banner-3"> Kate Winslet - Ronal </div>
            </div>
        </div>
        <div className='btnAtores'>
        
        <Button name='Ver Atores' linkUrl={'/atores'}/>
        
        </div>
        </>
    )
}

export default Home