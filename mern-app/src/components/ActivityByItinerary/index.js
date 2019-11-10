import React from 'react'
import './ActivityByItinerary.css'

export const ActivityByIitinerary = ({activity}) => {
    return (
        <div className="ActivityByItinerary__item">
            <h4>{activity.title}</h4>
        </div>
    )
}
