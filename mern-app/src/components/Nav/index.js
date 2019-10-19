import React from 'react'
import {Link} from 'react-router-dom'
import home from '../../assets/homeIcon.png'
import './Nav.css'

export const Nav = () => {
    return <div className="nav-container">
        <Link to='/'>
            <img src={home} alt="home" />
        </Link>
    </div>
}