import reviewTypes from "./review.types";

const INITIAL_STATE = {
    reviews:null,
    isFetching:true,
    errorMessage:null
}

const reviewReducer = (state = INITIAL_STATE , action) => {

    switch(action.type) {
         
        case reviewTypes.FETCH_REVIEWS_START:
            return {
                ...state,
                isFetching:true,
                errorMessage:null
            }
        case reviewTypes.FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: action.payload.data,
                isFetching:false
            }   
        case reviewTypes.FETCH_REVIEWS_FAILURE:
            return {
                ...state,                
                errorMessage:action.payload                
            }    
        default:
            return state;
    }

}

export default reviewReducer