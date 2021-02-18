import React, { useState } from 'react'
import { Menu } from 'antd';
import { StyledSideMenu, MenuItem } from '../../style/styled-components'

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['1', '2', '3', '4'];

const Sider = (props) => {
    const [openKeys, setOpenKeys] = useState(['1']);
    const [lessonsList, setLessonsList] = useState(
        props.lessons.filter(modules => modules.topicName[7] === props.mod)
    )


    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const responsiveMenu = () => {
        if (props.width < 1024) {
            props.setMenuModules(false)
        }
    }

    return (
        <StyledSideMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
            {lessonsList.map((moduleName, key) => <SubMenu key={key} title={moduleName.topicName}>

                {moduleName.lessonsList.map(lessons =>
                    <MenuItem onClick={() => {
                        props.setState(lessons.iframeUrl);
                        props.setLessonTitle(lessons.lessonName);
                        localStorage.setItem("storedLesson", lessons.iframeUrl);
                        localStorage.setItem("storedTitle", lessons.lessonName);
                        responsiveMenu()
                    }}>
                        {lessons.lessonName}
                    </MenuItem>)}

                {moduleName.issuesList.map(issues =>
                    <MenuItem onClick={() => {
                        props.setState(issues.iframeUrl);
                        props.setLessonTitle(issues.lessonName);
                        localStorage.setItem("storedLesson", issues.iframeUrl);
                        localStorage.setItem("storedTitle", issues.lessonName);
                        responsiveMenu()
                    }}>
                        {issues.lessonName}
                    </MenuItem>)}

            </SubMenu>)}
        </StyledSideMenu >
    );
};

export default Sider