import React from 'react'
import './CardImg.css'

export const CardImg = ({img,city}) =>{
    return <div className="CardImg" style={{backgroundImage: `url(${img})`}}>
        <h5>{city}</h5>
    </div>
}