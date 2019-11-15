import React from 'react'
import { Link } from 'react-router-dom'
import './Sign-btn.css'

export const SignBtn = ({ account }) => (
    (account === 'create') ? <Link to='/register'><button className="sign-btn">Create Account</button></Link> :
    (account === 'login') ? <Link to='/login'><button className="sign-btn">Log in</button></Link> :
    (account === 'logout') ? <Link to='/login'><button className="sign-btn">Log out</button></Link> : '?'
)