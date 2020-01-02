import reviewTypes from "./review.types";
import { toast } from "react-toastify";
import axios from "axios";

export const fetchReviewsStart = () => ({
    type: reviewTypes.FETCH_REVIEWS_START
})

export const fetchReviewsSuccess = (data) => ({
    type: reviewTypes.FETCH_REVIEWS_SUCCESS,
    payload: data
})

export const fetchReviewsFailure = errorMessage => ({
    type: reviewTypes.FETCH_REVIEWS_FAILURE,
    payload:errorMessage
})


export const fetchReviewsAsync = (bootcampId) => {

    return async dispatch => {

        try{
            dispatch(fetchReviewsStart());
            const response = await axios.get(`/api/v1/bootcamps/${bootcampId}/reviews`);
            dispatch(fetchReviewsSuccess(response.data));
        }
        catch(error) {
            dispatch(fetchReviewsFailure(error.message));
            toast.error(error.message);
        }
    }
}