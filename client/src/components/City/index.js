import React from 'react'
import './City.css'

export const City = ({city}) => {
    return (
        <div className="City">
            <img src={city.img_url} alt={city.city_name}/>
            <p> {city.city_name} </p>
        </div>
    )
}
