import BootcampActionTypes from "./bootcamp.types";

const INITIAL_STATE = {
    bootcamps: [],
    isFetching: false,
    paging:{},
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
                bootcamps:action.payload,
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