import { GET_ALL, LOADING, ERROR, SEARCH_CITIES,CHANGE_INPUT } from '../types/citiesTypes';

const INITIAL_STATE = {
	cities: [],
	filterCities: [],
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
				word: action.payload,
				filterCities: state.cities.filter((city)=>{
					if(action.payload === '') return true
					const regExp = new RegExp(`^(${action.payload})`,'i')
					return regExp.test(city.city_name)
				}),

			};
		case CHANGE_INPUT:
			return{
				...state,
				word: action.payload
			}
		default:
			return state;
	}
};
