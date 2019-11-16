import React from 'react'
import {Nav} from '../components/Nav'
import {NotFound as NotFoundComponent } from '../components/NotFound'
import {Loader} from '../components/Loader'

export const NotFound = ()=>{
    return (
        <>
        <Nav/>
        <section>
            <NotFoundComponent/>
            <Loader/>

        </section>
        </>
    )
}