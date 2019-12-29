import {authTypes} from "./auth.types";

const INITIAL_STATE = {
    user:null,
    isFetching:false,
    errorMessage:null
}

const authReducer = (state = INITIAL_STATE , action) =>  {

    switch(action.type) {
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case authTypes.LOGOUT:
            console.log(`authTypes.LOGOUT`);
            return {
                ...state,
                user:null
            }   
        default:
            return state;
    }


}

export default authReducer;