import React from 'react'
import {Link} from 'react-router-dom'
import './Sign-btn.css'

export const SignBtn = (props)=>{
    const {account, to} = props
    return (account)? <Link to={to}>
        <button className="sign-btn">Log in</button>
    </Link> : <Link to={to}>
        <button className="sign-btn">Create Acoount</button>
    </Link>
}