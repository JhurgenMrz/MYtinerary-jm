import React from 'react'
import {NotFound as NotFoundComponent } from '../components/NotFound'
import {Loader} from '../components/Loader'

export const NotFound = ()=>{
    return (
        <section>
            <NotFoundComponent/>
            <Loader/>

        </section>
    )
}