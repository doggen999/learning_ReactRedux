import {combineReducers} from 'redux'
import beerRatings from './beerRatingReducer'

const ratingReducer = combineReducers({beerRatings});

export default ratingReducer;
