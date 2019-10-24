import React from 'react'
import {Link} from 'react-router-dom'
import './Activities.css'
import { Activity } from '../Activity'
import MYtinerary from '../../assets/MYtinerary.svg'

export const Activities = () => {
    return <div className="activities_header">
        <Link to="/">
            <img src={MYtinerary} alt="logo" />
        </Link>
        <div className="activities">
            <Activity link="/music" icon="music" />
            <Activity link="/flight" icon="flight" />
            <Activity link="/lunch" icon="eat" />
            <Activity link="/travel" icon="travel" />
        </div>
    </div>
}