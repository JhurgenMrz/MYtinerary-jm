import React from 'react'
import {Link} from 'react-router-dom'
import icon from '../../assets/circled-right-2.png'
import './Start.css'

export const Start = ()=>{
    return (
        <div className="start">
            <h3>Start Browsing</h3>
            <Link to='/cities'>
                <img className="icon" src={icon} alt="start" />
            </Link>
        </div>
    )
}