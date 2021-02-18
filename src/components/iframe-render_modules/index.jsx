import React from 'react'
import { StyledIframe, IframeTitle } from '../../style/styled-components'
import { useWindowSize } from '../../helper/window-size-hook'

const IframeRender = (props) => {

    const { width } = useWindowSize()

    const iframeRender = () => {
        if (width > 1024) {
            return <StyledIframe src={props.src} width="100%" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" />
        } else {
            return <StyledIframe src={props.src} width="200%" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" />
        }
    }

    return (
        <p>
            <IframeTitle>
                <h3>{props.title}</h3>
            </IframeTitle>
            {iframeRender()}
        </p>
    )
}

export default IframeRender
