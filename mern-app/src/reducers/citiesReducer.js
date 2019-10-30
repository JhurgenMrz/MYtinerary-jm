import { GET_ALL, LOADING, ERROR, SEARCH_CITIES } from '../types/citiesTypes';

const INITIAL_STATE = {
	cities: [],
	filter: [],
	word: '',
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALL:
			return {
				...state,
				cities: action.payload,
				loading: false,
				error: ''
			};
		case LOADING:
			return {
				...state,
				loading: true
			};
		case ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		case SEARCH_CITIES:
			return {
				...state,
				word: action.payload
			};
		default:
			return state;
	}
};
