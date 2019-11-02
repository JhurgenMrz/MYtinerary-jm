import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Itineraries.css'

export const Itineraries = (props) => {
    console.log(props.match.params.city_name)
    console.log(props.match.params._id)
    return (
        <div className="Itineraries__container">
            <section className="Itineraries__nav"> 
                <Link to='/cities' >
                    <button>Back</button>
                </Link>
                <h3>Itineraries</h3>
            </section>
            <table>
                <thead>
                    <th>Activity</th>
                    <th>duration</th>
                    <th>rating</th>
                </thead>
            </table>
        </div>
    )
}

