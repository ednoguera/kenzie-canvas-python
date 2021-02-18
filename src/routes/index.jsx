import React, { useState } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import AccesPage from '../pages/access/'
import Modules from '../pages/modules/'
import PageLives from '../pages/lives/'

const Routes = () => {
    const [token, setToken] = useState(localStorage.getItem('accessToken'))
    const [accessKey, setAccessKey] = useState("ninguemmesegura")
    const [accessGranted, setAccessGranted] = useState()

    const history = useHistory()


    const onFinish = (values) => {

        if (values.password === accessKey) {
            setAccessGranted(true)
            setToken(localStorage.setItem("accessToken", "2fas1df23agfalkjsgd4f65"))
            history.push("/modulos")
        } else {
            setAccessGranted(false)
        }
    };

    return (
        <Switch>
            <Route exact path="/">
                {token === null ? <Redirect to='/acesso' /> : <Redirect to='/modulos' />}
            </Route>
            <Route exact path="/acesso">
                {token === null ? <AccesPage validateLogin={onFinish} accessGranted={accessGranted} /> : <Redirect to='/modulos' />}
            </Route>
            <Route exact path="/modulos">
                {/* <Modules /> */}
                {token !== null ? <Modules /> : <Redirect to="/acesso" />}
            </Route>
            <Route exact path="/lives">
                <PageLives />
            </Route>
        </Switch>
    )
}

export default Routes