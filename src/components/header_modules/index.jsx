import React from 'react'
import logoMobile from '../../assets/img/[LOGO-PY].png'
import logoFull from '../../assets/img/[LOGO2].png'
import {
    StyledHeader,
    MenuContainer,
    StyledMenuButton,
    HeaderTitleContainer,
    Hamburguer,
    CloseButton
} from '../../style/styled-components'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Header = (props) => {

    const handlerClick = () => {
        props.setMenuModules(!props.menuModules)
    }

    return (
        <StyledHeader>
            <MenuContainer>
                <StyledMenuButton onClick={handlerClick} setMenuModules={props.setMenuModules} menuModules={props.setMenuModules} >
                    {props.menuModules === false ?
                        <motion.div animate={{ scale: 1.0 }} drag="x" dragConstraints={{ left: -100, right: 100 }} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                            <Hamburguer />
                        </motion.div> :
                        <motion.div animate={{ scale: 1.0 }} drag="y" dragConstraints={{ left: -100, right: 100 }} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                            <CloseButton />
                        </motion.div>
                    }
                </StyledMenuButton>
            </MenuContainer>
            <HeaderTitleContainer>
                {props.width < 1024 ? <LogoMobile src={logoMobile} alt="Semana do Zero ao JavaScript" /> : <h1>Semana do Zero ao Python</h1>}
            </HeaderTitleContainer>
        </StyledHeader>
    )
}

export default Header

const LogoMobile = styled.img`
    height: 20vmin;
`

const LogoFull = styled.img`
    height: 10vmin;
`
