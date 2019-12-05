import React from 'react'
import { Link } from 'react-router-dom'
import './Sign-btn.css'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

const SignBtn = props =>{
    const { account } = props
    return (
        (account === 'create') ? <Link to='/register'><button className="sign-btn">Create Account</button></Link> :
        (account === 'login') ? <Link to='/login'><button className="sign-btn">Log in</button></Link> :
        (account === 'logout') && <button className="sign-btn" onClick={props.logout}>Log out</button>
        )
        
} 
export default connect(null, {logout})(SignBtn)