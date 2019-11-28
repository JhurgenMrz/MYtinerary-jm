import { GET_ERROR, CLEAR_ERROR } from '../types/errorsTypes'

const INITIAL_STATE = {
    message: {},
    status: null,
    id: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ERROR:
            return {
                message: action.payload.message,
                status: action.payload.status,
                id: action.payload.id
            }
        case CLEAR_ERROR:
            return {
                message: {},
                status: null,
                id: null
            }
        default:
            return state
    }

}