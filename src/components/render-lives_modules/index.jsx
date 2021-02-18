import React from 'react'
import styled from 'styled-components'
import { lives } from '../../helper/lives'
import { useWindowSize } from '../../helper/window-size-hook'

const Lives = () => {
    const { width } = useWindowSize()

    const setResponsiveVideo = (url) => {
        if (width > 320 && width < 1024) {
            return <iframe width="300" height="170" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        } else if (width > 1024 && width < 1734) {
            return <iframe width="450" height="253" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        } else {
            return <iframe width="560" height="315" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        }
    }

    return (
        <div>
            <LivesTitle>
                <h2>Torne-se um programador desejado pelo mercado com nossos conteúdos ao vivo!</h2>
            </LivesTitle>

            <PageLivesContainer>


                <SectionDay>
                    <p>Tenha sucesso como programador!</p>
                </SectionDay>
                <GroupLivesContainer>
                    <div>
                        <VideoHeader>
                            <h3>Descubra sua grande oportunidade de carreira para 2021</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/6HXeByLjrPs")}
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Segredos para você ter sucesso na programação!</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/QOoW3evXhSM")}
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>A jornada COMPLETA para você entrar na carreira do futuro, ser disputado pelas empresas e ganhar 5x mais</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/8O4z_rnqWiI")}
                    </div>

                </GroupLivesContainer>


                <SectionDay>
                    <p>Dia 26</p>
                </SectionDay>
                <GroupLivesContainer>
                    <div>
                        <VideoHeader>
                            <h3>26/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/xBDAwS49Ed0")}
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Demo com Q&A - Introdução à programação, variáveis, estruturas de decisão</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/tXNaLef4w_0")}
                    </div>
                </GroupLivesContainer>


                <SectionDay>
                    <p>
                        Dia 27
                </p>
                </SectionDay>

                <GroupLivesContainer>


                    <div>
                        <VideoHeader>
                            <h3>27/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/KfJcSrCHNnM")}
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Demo com Q&A - Arrays aninhados e funções</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/4OynhSBJhuk")}
                    </div>
                </GroupLivesContainer>


                <SectionDay>
                    <p>
                        Dia 28
                </p>
                </SectionDay>
                <GroupLivesContainer>

                    <div>
                        <VideoHeader>
                            <h3>28/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/aHMGhfg8jr4")}
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Arrays aninhados e funções</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/LTklhUyDHgw")}
                    </div>

                </GroupLivesContainer >


                <SectionDay>
                    <p>
                        Dia 29
                </p>
                </SectionDay>
                <GroupLivesContainer>
                    <div>
                        <VideoHeader>
                            <h3>10 passos para ter um perfil atraente no Linkedin</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/DQsNx4hhKLA")}
                    </div>

                    <div>
                        <VideoHeader>
                            <h3>29/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/4nXBiG9ZYM0")}
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Demo com Q&A - Introdução a objetos (como arrays associativos ou dicionários)</h3>
                        </VideoHeader>
                        {setResponsiveVideo("https://www.youtube.com/embed/Y8x0HHaWy2s")}
                    </div>

                </GroupLivesContainer>

            </PageLivesContainer>
        </div>
    )
}

export default Lives

const PageLivesContainer = styled.div`
    margin: 0% 10% 0 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        display: flex;
        flex-direction: column;
        
    }
`

const LivesTitle = styled.div`
    padding: 0 0 3% 30%;
    width: 90%;
    text-align: left;

    h2 {
        font-size: 36px;
        font-weight: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        
        h2 {
            font-size: 18px;
        }
    }
`

const GroupLivesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    div {
        margin: 0.5rem auto;
        padding: 0 0 0 5%;
    }

    @media (min-width: 320px) and (max-width: 1366px) {
        
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

`

const SectionDay = styled.div`
    border-bottom: 10px solid #05143c;
    width: 100%;
    padding-left: 0;
    text-align: left;
    margin-left: 4%;

    p {
        font-size: 36px;
        font-weight: bold;
        color: #5fdbfa;
        text-shadow: #05143c;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 90%;
        
        p {
            font-size: 22px;
        }
    }
`

const VideoHeader = styled.div`
    padding: 0 0 0 2%;
    width: 600px;

    h3 {
        font-size: 18px;
        font-weight: bold;
        text-align: left;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 300px;
        padding-right: 5%;

        h3 {
            font-size: 16px;
            text-align: left;
        }
    }

    @media (min-width: 1025px) and (max-width: 1738px) {
        width: 500px;
        padding-right: 5%;

        h3 {
            font-size: 16px;
            text-align: left;
        }
    }
`