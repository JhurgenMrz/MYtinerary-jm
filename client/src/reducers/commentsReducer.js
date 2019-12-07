import {
    LOADING_COMMENTS,
    GET_ALL_COMMENTS,
    CLEAR_COMMENTS,
    CREATE_COMMENT,
    DELETE_COMMENT,
    ERROR_COMMENTS,
    UPDATE_COMMENT
} from '../types/commentsTypes';

const INITIAL_STATE = {
	comments: [],
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALL_COMMENTS:
			return {
				...state,
				comments: action.payload,
				loading: false,
				error: ''
			};
		case CLEAR_COMMENTS: 
			return {
				...state,
				comments: []
			}
		case LOADING_COMMENTS:
			return {
				...state,
				loading: true
			};
		case ERROR_COMMENTS:
			return {
				...state,
				error: action.payload,
				loading: false
            };
        case CREATE_COMMENT:
            return {
                ...state,
                comments: state.comments.push(action.payload)
            }
		case UPDATE_COMMENT:
            return {
                ...state,
                comments: action.payload
			}
		case DELETE_COMMENT:
            return {
                ...state,
                comments: action.payload
			}
		default:
			return state;
	}
};
