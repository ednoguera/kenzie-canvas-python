import React, { useState } from 'react'
import SideBarModules from '../../components/side-bar_modules'
import Header from '../../components/header_modules/'
import SideBarLessons from '../../components/side-bar-lessons_modules/'
import Content from '../../components/render-content_modules/'
import styled from 'styled-components'
import Lives from '../../components/render-lives_modules/'
import { useWindowSize } from '../../helper/window-size-hook'
import {StyledHtmlContent} from "../../style/styled-components";

const Modules = (props) => {
    const [menuModules, setMenuModules] = useState(true)
    const [selectedLesson, setselectedLesson] = useState(
        localStorage.getItem("storedLesson") === "null" ? null : localStorage.getItem("storedLesson")
    ) //select first lesson by default

    const [lessonTitle, setLessonTitle] = useState(
        localStorage.getItem("storedTitle") === null ? "Aula 1" : localStorage.getItem("storedTitle")
    )
    const [baseContent, setBaseContent] = useState()

    const { width } = useWindowSize()

    const fetchContent = () => {
        //Set default lesson to the state.
        fetch("/pages/00-instrucoes.html")
            .then(res => res.text())
            .then(html =>
                setBaseContent(html)
            )
    }

    const renderLives = () => {
        setselectedLesson("lives")

        if (width < 1024) {
            setMenuModules(false)
        }
    }

    fetchContent()

    return (
        <div >
            <SideBarModules />
            <Header setMenuModules={setMenuModules} menuModules={menuModules} width={width} />
            <PageContainer>
                {menuModules === true ? <SideBarLessons setState={setselectedLesson} setLessonTitle={setLessonTitle} renderLives={renderLives} setMenuModules={setMenuModules} width={width} /> : null}
                {selectedLesson === null ? <StyledHtmlContent dangerouslySetInnerHTML={{ __html: baseContent }} /> : selectedLesson === "lives" ? <Lives /> : <Content selectedLesson={selectedLesson} title={lessonTitle} />}
            </PageContainer>
        </div>
    )
}

export default Modules

const PageContainer = styled.div`
      ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f9f9f9;
    }

    ::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 20px;
        box-shadow: 0 0 20px 5px gray;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #5fdbfa;
        box-shadow: 0 0 0px 5px #e6f7fe;
    } 
`