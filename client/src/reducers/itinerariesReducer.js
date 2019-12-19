import {
  GET_ITINERARIES,
  LOADING,
  ERROR,
  SEARCH_ITINERARIES,
  UPDATE_FAV,
  CLEAR_ITINERARIES
} from "../types/itinerariesTypes";

import {
  GET_ALL_ACTIVITIES,
  ERROR_ACTIVITIES,
  LOADING_ACTIVITIES
} from "../types/activityTypes";

const INITIAL_STATE = {
  itineraries: [],
  loading: false,
  error: "",
  loading_activities: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload,
        loading: false,
        error: ""
      };
    case CLEAR_ITINERARIES:
      return {
        ...state,
        itineraries: []
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
    case UPDATE_FAV:
      let itineraryWanted = state.itineraries.filter(
        el => el._id === action.payload.idItinerary
      );
      itineraryWanted.rating = action.payload.newRating;
      return {
        ...state,
        itineraries: [...state.itineraries, itineraryWanted]
      };
    case LOADING_ACTIVITIES:
      return {
        ...state,
        loading_activities: true
      };
    case GET_ALL_ACTIVITIES:
      state.itineraries.forEach((itinerary, index) => {
        if (itinerary._id === action.payload.ItineraryId) {
          // console.log('Itinerary Required',state.itineraries[index]);
          state.itineraries[index] = {
            ...state.itineraries[index],
            activities: action.payload.activities
          };
          // console.log('itinerary updated',state.itineraries[index])
        }
      });
      return {
        ...state
      };
    default:
      return state;
  }
};
