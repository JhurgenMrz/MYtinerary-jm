import { CLEAR_ERROR, GET_ERROR } from '../types/errorsTypes';

// RETURN ERRORS
export const returnErrors = (message, status, id = null) => {
    return {
        type: GET_ERROR,
        payload: { message, status, id }
    }
}

//CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERROR
    }
}