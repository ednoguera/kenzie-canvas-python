import React from 'react'
import { Figure, Image } from '../../style/styled-components'
import Logo from '../../assets/logo-kenzie/logo-kenzie-01.png'
import LogoMobile from '../../assets/logo-kenzie/logo-kenzie-03.png'
import { useWindowSize } from '../../helper/window-size-hook'

const BannerLogin = () => {
    const { width } = useWindowSize()

    return (
        <Figure>
            {width > 1024 ? <Image src={Logo} /> : <Image src={LogoMobile} />}
        </Figure>
    )
}

export default BannerLogin


