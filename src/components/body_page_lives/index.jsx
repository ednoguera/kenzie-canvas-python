import React, { useState } from 'react'
import { BackgroundSection, ContentContainer } from '../../style/styled-components'
import { useWindowSize } from '../../helper/window-size-hook'


const VideoSection = (props) => {
    const { width } = useWindowSize()

    const responsiveIframe = (url) => {
        if (width > 320 && width < 768) {
            return <iframe width="300" height="170" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        } else if (width > 768 && width < 1734) {
            return <iframe width="450" height="253" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        } else {
            return <iframe width="560" height="315" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
        }
    }

    return (
        <BackgroundSection>
            <div>
                <h2>{props.title}</h2>
            </div>
            <ContentContainer>
                <div>
                    <div>
                        <p>{props.date1}</p>
                    </div>
                    <div>
                        <h3>{props.title1}</h3>
                    </div>
                </div>

                {responsiveIframe(props.urlVideo1)}
            </ContentContainer>
            <div>
                <div>
                    <div>
                        <p>{props.date2}</p>
                    </div>
                    <div>
                        <h3>{props.title2}</h3>
                    </div>
                </div>

                {responsiveIframe(props.urlVideo2)}
            </div>
            <div>
                <div>
                    <div>
                        <p>{props.date3}</p>
                    </div>
                    <div>
                        <h3>{props.title3}</h3>
                    </div>
                </div>

                {responsiveIframe(props.urlVideo3)}
            </div>
            <div>
                <div>
                    <div>
                        <p>{props.date4}</p>
                    </div>
                    <div>
                        {props.bonus === "Live Bônus" ? <h4>{props.bonus}</h4> : null}
                    </div>
                    <div>
                        <h3>{props.title4}</h3>
                    </div>
                </div>

                {responsiveIframe(props.urlVideo4)}
            </div>
        </BackgroundSection>
    )
}

export default VideoSection