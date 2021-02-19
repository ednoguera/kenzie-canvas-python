import React, { useState } from 'react'
import IframeRender from '../iframe-render_modules/'
import { base_url } from '../../helper/url-content'

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
                {fetchedContent !== undefined ? <div dangerouslySetInnerHTML={{ __html: content }} /> : null}
            </div>
        </div>
    )
}

export default Content