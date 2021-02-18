import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <Link>{props.children}</Link>
    )
}

export default Navigation