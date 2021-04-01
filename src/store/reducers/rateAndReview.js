import { FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAIL , SAVE_REVIEWS_SUCCESS, SAVE_REVIEWS_FAIL,SAVE_RATING_SUCCESS,SAVE_RATING_FAIL,FETCH_RATING_SUCCESS, FETCH_RATING_FAIL } from '../actions/ActionTypes';

const rateAndReview = (state=[], action) => {
    switch (action.type) {
        case FETCH_REVIEWS_SUCCESS:
            return action.payload.data
        case SAVE_REVIEWS_SUCCESS:
            return action.payload.data
        case FETCH_RATING_SUCCESS:
            return action.payload.data       
        case SAVE_RATING_SUCCESS:
            return action.payload.data       
        case FETCH_REVIEWS_FAIL:
            return action.payload
        case SAVE_REVIEWS_FAIL:
            return action.payload
        case FETCH_RATING_FAIL:
            return action.payload
        case SAVE_RATING_FAIL:
            return action.payload
        default:
            return state
    }
}

export default rateAndReview;