import React from 'react'
import Banner from '../../components/banner/banner'
import './comentarios.css'
import Button from '../../components/button/button'

function Comentarios(){
    return (
        <>
        <Banner page/>
        <div className='paginas'>
            <h1>Comentários - Avatar 2, O Caminho da Água</h1>
        
            <div id="avNota">
                <div class="resumo">
                    <h2>Avaliações</h2>
                    <p>Resumo da avaliação do público</p>
                </div>
                <div class="notas">
                    <div class="valor">4.6</div>
                    <div class="stars"><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span><span class="starMeio"></span></div>
                    <span>5 notas</span>
                </div>            
            </div>

            <div id="comentarios">
                <h2>Avaliações do público</h2>
                <div class="coment">
                    <div class="foto">J</div>
                    <div class="txtComent">
                        <div class="nome">José Antônio</div>
                        <div class="stars"><span class="starFull"></span><span class="starFull"></span><span class="starNone"></span><span class="starNone"></span></div>
                        <p>
                            É sem dúvidas um show visual, cgi impecável, e efeitos especiais dignos do orçamento de 250 milhões.  Mas acaba por aí (aviso de spoilers) ...
                            <br />
                            O filme precisa correr nos  primeiros 15 minutos pra compensar os 12 anos de espera,  e pra conseguir  nos apresentar uma família completa com 4 filhos, os humanos maus voltam e  o caos retorna ,  mal dá tempo de se apegar aos membros novos da família e já inicia uma jornada alá sessão da tarde. Infelizmente o roteiro peca a toda hora pra quem busca sentido, tem q se deixar levar pelos nós mal feitos do roteiro...
                        </p>
                    </div> 
                </div>

                <div class="coment">
                    <div class="foto">L</div>
                    <div class="txtComent">
                        <div class="nome">Letícia Ayumi</div>
                        <div class="stars"><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span></div>
                        <p>
                            Que filme lindo! Assisti com minha família e vou guardar esse dia com carinho. O visual é simplesmente surreal, diversas vezes me arrepiei em alguma cena que mostrava algo totalmente mágico, principalmente na água. O foco do filme é na família do Jake (o qual não aparece tanto quanto no primeiro filme), não focando em um personagem específico. Deixaram um espaço para continuação com as tramas que não foram resolvidas ou foram abordadas rasamente, estou ansiosa para o resto. Particularmente, fiqu...
                        </p>
                    </div> 
                </div>

                <div class="coment">
                    <div class="foto">H</div>
                    <div class="txtComent">
                        <div class="nome">Helena Kanakura</div>
                        <div class="stars"><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span><span class="starMeio"></span></div>
                        <p>
                            Só voltei aos cinemas graças a este filme que assisto dês de pequena com minha família, pensei que nunca haveria continuação e me entusiasmei com a novidade. Assisti ao filme mesmo muitos criticando por conta das 3h de duração porém não senti este tempo, eu queria até mais. Achei uma ótima trama, agora os humanos retornaram não por conta das pedras mas sim para construir um ambiente para os outros humanos irem para Pandora porque a Terra não é mais habitável, "reviver" o vilão que agora parece e...
                        </p>
                    </div> 
                </div>

                <div class="coment">
                    <div class="foto">A</div>
                    <div class="txtComent">
                        <div class="nome">Andre Luis</div>
                        <div class="stars"><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span><span class="starMeio"></span></div>
                        <p>
                            Na Minha Opinião, ( AVISO ESSA AVALIAÇÃO CONTEM SPOILERS DO FILME ) Eu Gostei Bastante do Filme e achei um Espetáculo, Boa Computação Gráfica, Belas Paisagens, e Bom Vilão. Também achei Bom o roteiro e o foco mais nos filhos do Jake Sully. Apesar da Ação demorar a acontecer, as cenas de Ação ainda são muito boas. Super Recomendo assistir esse filme, se você for assistir, Você em nenhum Momento Sente Que o Filme tem 3 Horas de Duração, e Por último, Eu Não Achei em momento nenhum o Filme Chato, P...
                        </p>
                    </div> 
                </div>


                <div class="coment">
                    <div class="foto">J</div>
                    <div class="txtComent">
                        <div class="nome">Jan Rotenberg</div>
                        <div class="stars"><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span><span class="starFull"></span></div>
                        <p>
                            Para quem não assistiu o primeiro, o começo do filme é um pouco difícil de entender, mas nada impossível. Conforme você vai assistindo é possível ver a contrução dos personagens, onde eu percebi que me apeguei bastante a eles. Além gráficos incríveis, não tem como não se apaixonar pelo universo e pelo cenário do filme, é algo incrivelmente apaixonante e lindo. <br /> As cenas de ações foram muito bem feitas, principalmente pra quem for assistir em 3D, é muito bem adaptado, não ficaram borradas e n...
                        </p>
                    </div> 
                </div>

            </div>
            <Button name={'Ver Mais Comentários'} linkUrl={'https://www.google.com.br/search?q=comentarios+avatar+2'}/>
        </div>
        </>
    )
}

export default Comentarios