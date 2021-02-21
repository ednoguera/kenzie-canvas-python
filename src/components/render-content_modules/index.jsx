import React, { useState } from 'react'
import { base_url } from '../../helper/url-content'
import {StyledHtmlContent} from '../../style/styled-components'

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
                {fetchedContent !== undefined ? <StyledHtmlContent dangerouslySetInnerHTML={{ __html: content }} /> : null}
            </div>
        </div>
    )
}

export default Content

