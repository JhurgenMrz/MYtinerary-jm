import React from 'react'
import './Activities.css'
import { Activity } from '../Activity'
import MYtinerary from '../../assets/MYtinerary.svg'

export const Activities = () => {
    return <div className="activities_header">
            <img src={MYtinerary} alt="logo" />
        <div className="activities">
            <Activity link="/music" icon="music" />
            <Activity link="/flight" icon="flight" />
            <Activity link="/lunch" icon="eat" />
            <Activity link="/travel" icon="travel" />
        </div>
    </div>
}