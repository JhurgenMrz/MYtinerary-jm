import React from 'react'

export const Itinerary = ({itinerary}) => {
    return (
        <div>
            <h4>{itinerary.title}</h4>
            <p>{itinerary.duration}</p>
        </div>
    )
}
