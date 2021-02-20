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

    @media (min-width: 320px) and (max-width: 374px) {
        width: 295px;
        margin: 1rem auto;

        p {
            width: 300px;
            padding-left: 0 !important;
        }

        pre {
            width: 290px;
        }

        img {
            width: 290px;
        }

        div {
            width: 290px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 200px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 300px;
            border: none;
        }

        tbody {
            display: none;
        }

        td {
            width: 250px;
            padding: 0px !important;
        }

        h3{
            width: 290px;
        }

    }

    @media (min-width: 375px) and (max-width: 424px) {
        width: 360px;
        margin: 1rem auto;

        p {
            width: 360px;
            padding-left: 0 !important;
        }

        pre {
            width: 360px;
        }

        img {
            width: 360px;
        }

        div {
            width: 360px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 360px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 360px;
            border: none;
        }

        tbody {
            display: none;
        }

        td {
            width: 360px;
            padding: 0px !important;
        }

        h3{
            width: 290px;
        }

    }

    @media (min-width: 425px) and (max-width: 767px) {
        width: 390px;
        margin: 1rem auto;

        p {
            width: 390px;
            padding-left: 0 !important;
        }

        pre {
            width: 390px;
        }

        img {
            width: 390px;
        }

        div {
            width: 390px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 390px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 390px;
            border: none;
        }

        tbody {
            display: none;
        }

        td {
            width: 390px;
            padding: 0px !important;
        }

        h3{
            width: 390px;
        }

    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 390px;
        margin: 1rem auto;

                p {
            width: 390px;
            padding-left: 0 !important;
        }

        pre {
            width: 390px;
        }

        img {
            width: 390px;
        }

        div {
            width: 390px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 390px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 390px;
            border: none;
        }

        td {
            width: 390px;
            padding: 0px !important;
        }

        h3{
            width: 390px;
        }

    }
`