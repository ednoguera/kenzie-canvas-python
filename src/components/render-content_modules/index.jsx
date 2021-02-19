import React, { useState } from 'react'
import { base_url } from '../../helper/url-content'
import styled from 'styled-components'

const Content = (props) => {
    const [fetchedContent, setFetchedContent] = useState(base_url)
    const [content, setContent] = useState()

    const fetchContent = () => {
        fetch(`${props.selectedLesson}`)
            .then(res => res.text())
            .then(
                body => setContent(body)
            )
    }

    fetchContent()

    return (
        <div>
            <div>
                {/* {fetchedContent !== undefined ? <IframeRender src={props.selectLesson} title={props.title} /> : null} */}
                {fetchedContent !== undefined ? <StyledContent dangerouslySetInnerHTML={{ __html: content }} /> : null}
            </div>
        </div>
    )
}

export default Content

const StyledContent = styled.div`
    width: 60%;
    margin: 0 0 0 30%;
    text-align: left;

    @media (min-width: 320px) and (max-width: 375px) {
        width: 300px;
        margin: 1rem auto;

        p {
            width: 300px;
        }

        pre {
            width: 290px;
        }

    }
`