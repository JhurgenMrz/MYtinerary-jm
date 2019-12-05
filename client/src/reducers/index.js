import { combineReducers } from 'redux';
import citiesReducer from '../reducers/citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

export default combineReducers({
	cities: citiesReducer,
	itineraries: itinerariesReducer,
	error: errorReducer,
	user: userReducer
});
