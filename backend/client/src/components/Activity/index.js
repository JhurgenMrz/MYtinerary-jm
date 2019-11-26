import React from 'react'
import {Link} from 'react-router-dom'
import {FaMusic} from 'react-icons/fa'
import {MdFlight} from 'react-icons/md'
import {MdLocalDining} from 'react-icons/md'
import {MdTrain} from 'react-icons/md'
import './Activity.css'

export const Activity = ({icon, link})=>{

    return <Link to={link} >
        <div className="activity">
        {
            (icon === 'music')? <FaMusic/> :
            (icon === 'flight') ? <MdFlight /> : 
            (icon === 'eat') ? <MdLocalDining/> :
            (icon === 'travel') ? <MdTrain/> : <h3>?</h3>
        }  
        </div>
    </Link>
}