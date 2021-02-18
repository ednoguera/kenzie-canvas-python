import React from 'react'
import { SideBarLessonsMenu } from '../../style/styled-components'
import Sider from './drop-down-menu'
import { lessons } from '../../helper/lesson_array'
import SiderLives from './sider-lives'

const SideBarLessons = (props) => {


    return (
        <SideBarLessonsMenu>
            <SiderLives title="ASSISTIR LIVE!" renderLives={props.renderLives} />
            <Sider mod="Õ" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="A" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="B" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="C" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="D" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="E" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="F" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="G" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="H" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
            <Sider mod="I" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} setMenuModules={props.setMenuModules} width={props.width} />
        </SideBarLessonsMenu>
    )
}

export default SideBarLessons