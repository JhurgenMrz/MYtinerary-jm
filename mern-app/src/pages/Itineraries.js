import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../styles/Itineraries.css'

export const Itineraries = (props) => {
    console.log(props.match.params.city_name)
    const cityId = props.match.params._id

    const [itineraries, setItineraries] = useState([])

    useEffect(()=>{
        axios(`http://localhost:5001/api/itineraries/${cityId}`).then(({data})=>{
            console.log(data.data)
            setItineraries(data.data)
            
        })
        .catch(err=> console.log(err))
    },[])

    function showStarts(count){
        const starts= []
        for(let i = 0; i < count; i++){
            starts.push('star')
        }
        return starts
    }


    return (
        <div className="Itineraries__container">
            <section className="Itineraries__nav"> 
                <Link to='/cities' >
                    <button>Back</button>
                </Link>
                <h3>Itineraries</h3>
            </section>
            <table style={{textAlign: "center"}}>
                <thead>
                    <th>Activity</th>
                    <th>duration</th>
                    <th>rating</th>
                </thead>
                <tbody>
                    {
                        itineraries.map(item=>(
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.duration}m</td>
                                <td>
                                    {
                                        showStarts(item.rating).map(el=> <div>⭐</div>)
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

