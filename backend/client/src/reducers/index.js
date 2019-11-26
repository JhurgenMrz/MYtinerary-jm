import { combineReducers } from 'redux';
import citiesReducer from '../reducers/citiesReducer';
import itinerariesReducer from './itinerariesReducer';

export default combineReducers({
	citiesReducer,
	itinerariesReducer
});
