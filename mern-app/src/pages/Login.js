import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../components/Nav'
import '../styles/Login.css'
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'

export const Login = (props) => {
    return <>
        <Nav isLogin />
        <div className="Login">
            <h2>Login</h2>
            <div className="Login__container">
                <input
                    type="text"
                    placeholder="User Name"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <div>
                <input type="checkbox" />
                <p>Remember me</p>
                </div>
                <button>Ok</button>
            </div>
            <div className="Login__button">
                <FaFacebookSquare /> <p>Log in with Google</p>
            </div>
            <div className="Login__button">
                <FaGoogle /> <p>Log in with Facebook</p>
            </div>
            <div className="Login__newAccount">
                <p>Don't have a MYtinerary account yet? You should create one! It's totally free and only takes a minute</p>
                <h4 onClick={()=>props.history.push('/register')}>
                Create Account
                </h4>
                    
            </div>
        </div>
    </>
}
