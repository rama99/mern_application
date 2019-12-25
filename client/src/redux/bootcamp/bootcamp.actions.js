import axios from "axios";
import  BootcampActionTypes from "./bootcamp.types";

export const fetchBootcampsStart = () => ({
    type: BootcampActionTypes.FETCH_BOOTCAMPS_START
})

export const fetchBootcampsSuccess = data => ({
    type:BootcampActionTypes.FETCH_BOOTCAMPS_SUCCESS,
    payload:data
})

export const fetchBootcampsFailure = errorMessage => ({
    type: BootcampActionTypes.FETCH_BOOTCAMPS_FAILURE,
    payload:errorMessage
})


export const fetchBootcampsAsync =  () => {

    return  async dispatch => {

        try {
            dispatch(fetchBootcampsStart())
            const response = await axios.get(`/api/v1/bootcamps`);
            console.log( response.data);
            dispatch(fetchBootcampsSuccess(response.data));
            console.log(`SUCCESS`);
        }
        catch(error) {
            console.log(`ERROR  ${error.message}`);
           // dispatch(fetchBootcampsFailure(error.message));
        }

        return `done`;
        
    }
}
