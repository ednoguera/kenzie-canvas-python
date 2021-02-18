import React from 'react'
import { FooterPageLives } from '../../style/styled-components'

const FooterLives = (props) => {
    return (
        <FooterPageLives>
            <figure>
                <img src={props.img} />
            </figure>
            <div>
                <p>{props.footerText}</p>
            </div>
        </FooterPageLives>
    )
}

export default FooterLives