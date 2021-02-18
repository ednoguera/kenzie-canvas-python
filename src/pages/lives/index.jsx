import React from 'react'
import HeaderLives from '../../components/header_page_lives/'
import VideoSection from '../../components/body_page_lives/'
import FooterLiver from '../../components/footer_page_lives/'
import Logo from '../../assets/img/[LOGO].png'
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

                <VideoSection title="Lives com Daniel" date1="26/01" title1="Descubra sua grande oportunidade de carreira para 2021" urlVideo1="https://www.youtube.com/embed/6HXeByLjrPs" date2="27/01" title2="Segredos para você ter sucesso na programação" urlVideo2="https://www.youtube.com/embed/QOoW3evXhSM" date3="28/01" title3="A jornada COMPLETA para você entrar na carreira do futuro, ser disputado pelas empresas e ganhar 5x mais." urlVideo3="https://www.youtube.com/embed/8O4z_rnqWiI" date4="29/01" title4="10 Passos para ter um perfil atraente no Linkedin." urlVideo4="https://www.youtube.com/embed/DQsNx4hhKLA" bonus="Live Bônus" />

            </SectionGroup>

            <SectionGroup style={{ "backgroundColor": color.grey }}>

                <VideoSection title="Demo com Q&A" date1="26/01" title1="Introdução à programação e variáveis" urlVideo1="https://www.youtube.com/embed/tXNaLef4w_0" date2="27/01" title2="Estruturas de repetição, arrays" urlVideo2="https://www.youtube.com/embed/4OynhSBJhuk" date3="28/01" title3="Arrays aninhados e funções" urlVideo3="https://www.youtube.com/embed/LTklhUyDHgw" date4="29/01" title4="Introdução a objetos(arrays associativos)" urlVideo4="https://www.youtube.com/embed/Y8x0HHaWy2s" />

            </SectionGroup>

            <SectionGroup style={{ "backgroundColor": color.white }}>

                <VideoSection title="Desenvolvimento de projeto" date1="26/01" urlVideo1="https://www.youtube.com/embed/xBDAwS49Ed0" date2="27/01" urlVideo2="https://www.youtube.com/embed/KfJcSrCHNnM" date3="28/01" urlVideo3="https://www.youtube.com/embed/aHMGhfg8jr4" date4="29/01" urlVideo4="https://www.youtube.com/embed/4nXBiG9ZYM0" />

            </SectionGroup>

            <FooterLives img={LogoWhite} footerText="Copyrights 2021 Kenzie All Rights Reserved" />
        </>
    )
}

export default PageLives

