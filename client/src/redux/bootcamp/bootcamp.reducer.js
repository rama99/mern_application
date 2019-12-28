import BootcampActionTypes from "./bootcamp.types";

const INITIAL_STATE = {
    bootcamps: [],
    isFetching: false,
    count:0,
    pagination:undefined,
    errorMessage:undefined    
}

const bootcampReducer  = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case BootcampActionTypes.FETCH_BOOTCAMPS_START:
            return {
                ...state,
                isFetching:true
            }
        case BootcampActionTypes.FETCH_BOOTCAMPS_SUCCESS:
            return {
                ...state,
                bootcamps:action.payload.data,
                pagination:action.payload.pagination,
                count:action.payload.count,
                isFetching: false
            } 
        case BootcampActionTypes.FETCH_BOOTCAMPS_FAILURE:
            return {
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }       
        default:
            return state;
    }
}


export default bootcampReducer;