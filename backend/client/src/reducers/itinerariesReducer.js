import {
	GET_ITINERARIES,
	LOADING,
	ERROR,
	SEARCH_ITINERARIES,
	UPDATE_FAV,
	CLEAR_ITINERARIES
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
		case CLEAR_ITINERARIES: 
			return {
				...state,
				itineraries: []
			}
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
		case UPDATE_FAV:
			let itineraryWanted = state.itineraries.filter(el => el._id === action.payload.idItinerary)
			itineraryWanted.rating = action.payload.newRating
			return {
				...state,
				itineraries: [
					...state.itineraries,
					itineraryWanted
				]
			}
		default:
			return state;
	}
};
