import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ButtonCtaLives } from '../../style/styled-components'

const CtaButton = (props) => {
    const history = useHistory()

    return (
        <ButtonCtaLives>
            <a href={props.url}>
                <motion.button whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    style={{ x: 100 }}>
                    {props.cta}
                </motion.button>
            </a>
        </ButtonCtaLives>
    )
}

export default CtaButton