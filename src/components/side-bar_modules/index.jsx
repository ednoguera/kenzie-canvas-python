import React from 'react'
import banner from '../../assets/logo-kenzie/logo-kenzie-05.png'
import { SideNavModules, ImageSideBarModules } from '../../style/styled-components'

const SideBarModules = (props) => {
    return (
        <SideNavModules>
            <ImageSideBarModules src={banner} />
        </SideNavModules>
    )
}

export default SideBarModules


