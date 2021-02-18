import React from 'react'
import { SideNav, TitleContainer, ImageSide, TextContainer } from '../../style/styled-components'
import banner from '../../assets/img/[LOGO-PY].png'

const SideBar = () => {
    return (
        <SideNav>
            <TitleContainer>
                <p>Bem-vindo(a) à plataforma de conteúdo de <strong>Python</strong> da</p>
                <h1>Kenzie Academy Brasil</h1>
            </TitleContainer>
            <ImageSide src={banner} />
            <TextContainer>
                {/* <p>
                    Se você chegou até aqui, é porquê nos interessamos pelo seu
                    perfil. Agora, queremos ver um pouco mais dos seus
                    conhecimentos técnicos.
                </p>
                <p>
                    Mas fique tranquilo(a), para realizar os testes não é
                    necessário conhecimento prévio em programação, tudo bem?
                </p> */}
            </TextContainer>
        </SideNav>
    )
}

export default SideBar