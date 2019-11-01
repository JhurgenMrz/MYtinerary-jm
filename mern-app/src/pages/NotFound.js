import React from 'react'
import {Loader} from '../components/Loader'

export const NotFound = ()=>{
    return (
        <section style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h3>Not Found</h3>
            <Loader/>

        </section>
    )
}