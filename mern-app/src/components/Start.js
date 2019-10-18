import React from 'react'
import icon from '../assets/circled-right-2.png'
import './Start.css'

export const Start = ()=>{
    return (
        <div className="start">
            <h3>Start Browsing</h3>
            <img className="icon" src={icon} />
        </div>
    )
}