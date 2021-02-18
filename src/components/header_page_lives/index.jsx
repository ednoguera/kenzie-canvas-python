import React from 'react'
import { Header, Figure } from '../../style/styled-components'

const HeaderLives = (props) => {
    return (
        <Header>
            <div>
                <figure>
                    <img src={props.logo} />
                </figure>
            </div>
            <div>
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
            </div>
        </Header>
    )
}

export default HeaderLives