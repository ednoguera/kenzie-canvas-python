import React from 'react'
import { SiderLivesContainer } from '../../style/styled-components'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SiderLives = (props) => {

    return (

        <SiderLivesContainer onClick={
            props.renderLives
        }>
            <motion.div
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <h2>{props.title}</h2>
            </motion.div>

        </SiderLivesContainer>

    )
}

export default SiderLives

