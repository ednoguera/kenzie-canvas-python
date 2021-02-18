import React from 'react'
import SideNav from '../../components/side-bar_access'
import ValidateLogin from '../../components/validate-login_access'
import BannerLogin from '../../components/banner-login_access'

const AccessPage = (props) => {
    return (
        <div>
            <SideNav />
            <BannerLogin />
            <ValidateLogin onFinish={props.validateLogin} accessGranted={props.accessGranted} />
        </div>
    )
}

export default AccessPage