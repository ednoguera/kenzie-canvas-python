import React from 'react'
import { PageContainer, HeaderContainer, Img } from '../../style/styled-components'
import { useWindowSize } from '../../helper/window-size-hook'

//IMAGES IN THIS PAGE
import codeWars1 from '../../assets/img/codewars.png'
import returnKata from '../../assets/img/return-kata.png'
import listaCodewars from '../../assets/img/lista-codewars.png'
import codeWarsList from '../../assets/img/codewars-list.png'
import duvidas from '../../assets/img/duvidas.png'
import entregas from '../../assets/img/entregas.png'



const Instructions = () => {
    const { width } = useWindowSize()


    const responsiveSrc = () => {
        if (width >= 320 && width <= 1024) {
            return 320
        }
    }

    const responsiveVideo = () => {
        if (width > 320 && width < 1024) {
            return <iframe src="//player.vimeo.com/video/76979871?title=0&amp;byline=0&amp;portrait=0" width="300" height="338" frameborder="0" allowfullscreen=""></iframe>
        } else {
            return <iframe src="//player.vimeo.com/video/76979871?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" allowfullscreen=""></iframe>
        }
    }

    return (
        <PageContainer>
            <HeaderContainer>
                <h2 >Olá, seja bem-vindo(a) ao curso de Introdução a Programação com Python da Kenzie Academy</h2>
                <p >Hoje você está dando o primeiro passo para iniciar sua carreira como desenvolvedor de software!</p>
                <p >&nbsp;</p>
                <h3 >Agora, vamos te explicar um pouco sobre o curso, as ferramentas que irá utilizar e alguns avisos importantes:</h3>
                <p>&nbsp;</p>
            </HeaderContainer>
            <h3>As Ferramentas</h3>
            <p>Para que você aproveite e aprenda muito durante o curso, selecionamos algumas ferramentas (sem custo para você) que servirão para a visualização das aulas, execução dos exercícios e entrega das atividades.</p>
            <p>Essas são as ferramentas que irá utilizar:</p>
            <ul>
                <li>
                    <strong>Slack (slack.com):</strong> O slack é uma das principais ferramentas de comunidade do mercado. E é por lá que você conseguirá interagir com outros usuários, se comunicar com o time de ensino da Kenzie e principalmente tirar todas as dúvidas que surgirem com nosso time de suporte!</li>
            </ul>
            <p>Não está na comunidade do Experiência Kenzie ainda? Entre agora mesmo através do link: <a href="https://participe.kenzie.com.br/slack" class="external" target="_blank" rel="noreferrer noopener"><span>Junte-se a nossa comunidade no Slack</span><span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="Links para um site externo."></span><span class="screenreader-only">&nbsp;</span></a></p>
            <p>&nbsp;</p>
            <ul>
                <li><strong>Codewars (codewars.com):&nbsp;</strong></li>
            </ul>

            <p>Aqui é onde você executará grande parte dos exercícios e práticas do curso.&nbsp; Para utiliza-la basta acessar o site e criar uma conta clicando em SignUp. Você será redirecionado para esta tela:</p>

            <figure>
                <Img src={codeWars1} alt="Captura de Tela 2020-11-13 às 11.13.19.png" width={width} height="788" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/125" data-api-returntype="File" ></Img>
            </figure>

            <div>
                <p>Selecione a linguagem Python e a ferramenta irá te propor um desafio para liberar seu login. É algo simples, mas caso tenha dúvidas peça ajuda a seus colegas na comunidade do SLACK</p>
            </div>

            <div>
                <p>
                    <a href="https://www.codewars.com/kata/50654ddff44f800200000004/train/Python">Neste exemplo</a> (imagem abaixo), o kata pede para você corrigir o que não está funcionando perfeitamente. Nele, falta um <strong>return</strong> para então retornar a multiplicação entre <strong>a</strong> e <strong>b</strong>, e você pode conferir a resolução na imagem abaixo:
                </p>
            </div>

            <figure>
                <Img src={returnKata} alt="Captura de Tela 2020-11-13 às 11.13.41.png" width={width} height="778" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/124" data-api-returntype="File" ></Img>
            </figure>

            <div>
                <p>Após isso é só criar seu nome de usuário e pronto. Já conseguirá acessar todos os exercícios!</p>

            </div>

            <div>
                <h3>O Curso</h3>
                <p>
                    O curso de Introdução a Programação com Python está estruturado em 8 módulos.
                </p>
                <p>Os módulos que serão mostrados no curso são:</p>
                <ul>
                    <li>MÓDULO A - Python Básico, Variáveis e Comparando Variáveis</li>
                    <li>MÓDULO B - Trabalhando com decisões lógicas</li>
                    <li>MÓDULO C - Arrays</li>
                    <li>MÓDULO D - Loops</li>
                    <li>MÓDULO E - Loops - continuação</li>
                    <li>MÓDULO F - Funções</li>
                    <li>MÓDULO G - Fazendo Loops em Arrays</li>
                    <li>MÓDULO H - Conclusão</li>
                    <li>MÓDULO I - Entrega final</li>
                </ul>
                <p>&nbsp;</p>
                <p>Em cada módulo você terá acesso a uma página onde você deve assistir ao vídeo com as aulas e logo abaixo terá a transcrição do texto da aula, caso deseje ler ou relembrar depois.&nbsp;</p>




                <p>Alguns vídeos estão em inglês. Porém não se preocupe, caso não domine a língua. Você pode ativar as legendas clicando icone CC na barra de ferramentas do vídeo. Caso tenha dúvidas, segue link explicativo sobre a ativação das legendas: <a href="https://vimeo.zendesk.com/hc/pt/articles/224968828-Closed-Captions-CC-e-Legendas" class="external" target="_blank" rel="noreferrer noopener">
                    <span>Como ativar as legendas</span><span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="Links para um site externo."></span><span class="screenreader-only">&nbsp;</span></a></p>
                <p>&nbsp;</p>

                {responsiveVideo()}
                <p>&nbsp;</p>
                <p>Após assistir aos vídeos, você deve praticar!! E praticar muito! Para isso preparamos vários exercícios para que execute o conceito que acabou de aprender:</p>
            </div>
            <figure>
                <Img src={listaCodewars} alt="Captura de Tela 2020-11-13 às 11.27.24.png" width={responsiveSrc} height="274" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/122" data-api-returntype="File"></Img>
            </figure>
            <div>
                <p>Os exercícios estão na ferramenta do Codewars, e você poderá executar os código diretamente pelo navegador, sem necessitar instalar nada no seu computador.</p>
                <p>Ao clicar nos links, você será redirecionado para o site da atividade. Leia com bastante atenção as instruções e execute a codificação na janela superior direita. Depois é só executar seu código clicando em testar e verificar os resultados na janela da esquerda:</p>
                <figure>
                    <Img src={codeWarsList} alt="Captura de Tela 2020-11-13 às 11.32.44.png" width="3210" height="1040" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/126" data-api-returntype="File" />
                </figure>
            </div>
            <div>
                <p>Caso apresente algum erro nos testes, revise seu código e tente novamente. Se não conseguir evoluir, é só entrar na comunidade do Slack e colocar seu dúvida ou dificuldade no canal de suporte daquele módulo. Que em minutos alguém irá te ajudar!</p>

                <figure>
                    <img src={duvidas} alt="Captura de Tela 2020-11-13 às 11.34.38.png" width="320" height="70" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/121" data-api-returntype="File" />
                </figure>
                <p>&nbsp;</p>

                <p>
                    Caso apresente algum erro nos testes, revise seu código e tente novamente. Se não conseguir evoluir, é só entrar na comunidade do Slack e colocar seu dúvida ou dificuldade no canal de suporte. Que em minutos alguém irá te ajudar!
                </p>
            </div>
            {/* <div>
                <p >&nbsp;</p>
                <h3 >Entregas</h3>
                <p>Durante o curso você deverá fazer 2 entregas e ter um taxa de acerto acima de 70% para conquistar seu certificado.</p>
                <p>As entregas são realizadas pela plataforma do Devskiller. Por lá você terá acesso ao desafio e poderá criar seu código diretamente pela plataforma, ou baixar para o computador, criar o código e fazer o upload futuro. Caso precise refazer ou tenha algum problema é só entrar em contato com nosso time pelo Slack.</p>
                <figure>
                    <Img src={entregas} alt="Captura de Tela 2020-11-13 às 11.40.12.png" width="3328" height="1200" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/120" data-api-returntype="File" />
                </figure>
                <p ><strong>Muito importante que você execute seu código e corrija todos os erros antes de submeter o teste</strong></p>
                <p >&nbsp;</p>
                <p >Esperamos que você tenha um aprendizado muito bom com a Kenzie e faça a introdução na carreira de desenvolvimento de software com grande sucesso!</p>
                <p >Bom curso e <strong>BORA CODAR!</strong></p>
            </div> */}

        </PageContainer>
    )
}

export default Instructions

