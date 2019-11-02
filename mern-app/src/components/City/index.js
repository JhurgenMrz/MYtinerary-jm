import React from 'react'

export const City = ({city}) => {
    return (
        <div className="City" >
            <h5> {city.country} </h5> <p> {city.city_name} </p>
        </div>
    )
}
