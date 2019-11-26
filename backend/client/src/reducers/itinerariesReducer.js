import {
	GET_ITINERARIES,
	LOADING,
	ERROR,
	SEARCH_ITINERARIES,
	CHANGE_INPUT
} from '../types/itinerariesTypes';

const INITIAL_STATE = {
	itineraries: [],
	filterItineraries: [],
	word: '',
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ITINERARIES:
			return {
				...state,
				itineraries: action.payload,
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
		case SEARCH_ITINERARIES:
			return {
				...state,
				loading: false,
				word: action.payload,
				filterItineraries: state.itineraries.filter(itinerary => {
					if (action.payload === '') {
						return false;
					} else {
						const regExp = new RegExp(`^(${action.payload})`, 'i');
						return regExp.test(itinerary.title);
					}
				})
			};
		case CHANGE_INPUT:
			return {
				...state,
				word: action.payload
			};
		default:
			return state;
	}
};
