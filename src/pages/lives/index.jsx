import React from 'react'
import HeaderLives from '../../components/header_page_lives/'
import VideoSection from '../../components/body_page_lives/'
import FooterLiver from '../../components/footer_page_lives/'
import Logo from '../../assets/img/[LOGO-PY].png'
import LogoWhite from '../../assets/logo-kenzie/logo-kenzie-white.png'
import { SectionGroup } from '../../style/styled-components'
import FooterLives from '../../components/footer_page_lives/'
import CtaButton from '../../components/cta-button/'

export const color = {
    "white": "#fff",
    "grey": "#f2f2f2",
    "red": "red",
    "none": "none"
}

const PageLives = () => {


    return (
        <>
            <SectionGroup style={{ "backgroundColor": color.white }}>
                <HeaderLives logo={Logo} title="NÃO PERCA NENHUMA LIVE" subtitle="Confira tudo o que está rolando na semana que vai mudar o seu futuro" />

                <CtaButton cta="Faça parte da nossa comunidade no Slack" url="https://participe.kenzie.com.br/slack" />

                <VideoSection title="Live BÔNUS com Daniel" date1="01/03" title1="A oportunidade para você entrar na programação e ser disputado por grandes empresas" urlVideo1="https://www.youtube.com/embed/yAhDKRwujAg"  />

            </SectionGroup>

            <SectionGroup style={{ "backgroundColor": color.grey }}>

                <VideoSection title="Demo com Time de ensino" date1="23/02" title1="Trabalhando com listas de forma fácil" urlVideo1="https://www.youtube.com/embed/yqEIV8D0Wwk" />
                <VideoSection date1="24/02" title1="Funções em Python" urlVideo1="https://www.youtube.com/embed/Dr4jfOasmMs" />
                <VideoSection date1="25/02" title1="Funções em Python" urlVideo1="https://www.youtube.com/embed/5o4Jqzn52e8" />
                <VideoSection date1="26/02" title1="Processar dados de um arquivo csv" urlVideo1="https://www.youtube.com/embed/4-lbCAdW7s4" />

            </SectionGroup>

            {/*<SectionGroup style={{ "backgroundColor": color.white }}>*/}

            {/*    <VideoSection title="Desenvolvimento de projeto" date1="26/01" urlVideo1="https://www.youtube.com/embed/xBDAwS49Ed0" />*/}

            {/*</SectionGroup>*/}

            <FooterLives img={LogoWhite} footerText="Copyrights 2021 Kenzie All Rights Reserved" />
        </>
    )
}

export default PageLives

