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


export const fetchBootcampsAsync =  (options) => {

    let queryParams = ``;

    if(options && options.next) {
        queryParams += `page=` + options.next.page;
    }
    else {
        queryParams += `page=` + 2;     
    }

    return  async dispatch => {

        try {
            dispatch(fetchBootcampsStart())
            const response = await axios.get(`/api/v1/bootcamps?${queryParams}`);
            console.log( response.data);
            dispatch(fetchBootcampsSuccess(response.data));
            console.log(`SUCCESS`);
        }
        catch(error) {
            console.log(`ERROR  ${error.message}`);
            dispatch(fetchBootcampsFailure(error.message));
        }

        return `done`;       
    }

}

export const fetchBootcampsByLocationAsync =  (options) => {
    
    return  async dispatch => {

        const {zipcode , distance } =  options;

        try {
            dispatch(fetchBootcampsStart())
            const response = await axios.get(`/api/v1/bootcamps/radius/${zipcode}/${distance}`);
            console.log(response.data);
            dispatch(fetchBootcampsSuccess(response.data));
            console.log(`SUCCESS locations`);
        }
        catch(error) {
            console.log(`ERROR  ${error.message}`);
            dispatch(fetchBootcampsFailure(error.message));
        }

        return `done`;       
    }

}

export const fetchBootcampsByFilterAsync = () => {

    return async dispatch => {

        try {

            let query;

            dispatch(fetchBootcampsStart);

            const response = await axios.get(`/api/v1/bootcamps?${query}`);
            console.log(response.data);
            dispatch(fetchBootcampsSuccess(response.data));
            console.log(`SUCCESS filter`);
            
        }
        catch(error){

        }
    }


}



