import { LOADING_ACTIVITIES, GET_ALL_ACTIVITIES, ERROR_ACTIVITIES } from '../types/activityTypes'
import axios from 'axios'

export const getAllActivities = (ItineraryId) =>async (dispatch) => {
    dispatch({
        type: LOADING_ACTIVITIES
    })
    try{
        const {data} = await axios.get(`/api/activities/${ItineraryId}`)
        // console.log('activities by itinerary',data.data)

        const ObjAcivity = {
            activities: data.data,
            ItineraryId
        }

        dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: ObjAcivity
        })
        
    } catch (err) {
        dispatch({
            type: ERROR_ACTIVITIES,
            payload: 'Ocurrio un Error, intentelo más tarde'
        })
    }

}