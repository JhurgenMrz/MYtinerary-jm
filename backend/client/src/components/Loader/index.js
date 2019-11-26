import React from 'react'
import './Loader.css'

export const Loader = ()  => {
    return (
        <div className="Loader__container">
        <svg className="svg bigSvg Fcolor"><circle cx="70" cy="70" r="70"></circle></svg>
        <svg className="svg mediumSvg Scolor"><circle cx="55" cy="55" r="55"></circle></svg>
        <svg className="svg smallSvg Tcolor"><circle cx="40" cy="40" r="40"></circle></svg>
        </div>
    )   
}
