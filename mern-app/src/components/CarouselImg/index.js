import React, { useState, useEffect } from 'react'
import { data } from '../../data.js'
import { Gallery, GalleryImage } from 'react-gesture-gallery'
import { CardImgContainer } from '../CardImgContainer'
import './CarouselImg.css'

export const CarouselImg = () => {

    const [index, setIndex] = useState(0)
    const arrayData = [
        [],
        [],
        []
    ]

    data.forEach((el, index) => {
        if (index >= 0 && index < 4) {
            arrayData[0].push(el)
        }
        if (index >= 4 && index < 8) {
            arrayData[1].push(el)
        }
        if (index >= 8 && index < 12) {
            arrayData[2].push(el)
        }
    })

    useEffect(() => {
        const timer = setInterval(() => {
            if (index === ((data.length / 4) - 1)) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);

    return <div className="CarouselImg">
        <Gallery
            index={index}
            onRequestChange={i => {
                setIndex(i)
            }}
        >
            {arrayData.map((el, index) => (
                <CardImgContainer key={index} data={el} />
                // <div><h5>Hello{index}</h5></div>
            ))}
        </Gallery>
    </div>
}