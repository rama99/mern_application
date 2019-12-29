import {authTypes} from "./auth.types";


export const loginStart = (emailAndPassword) => ({
    type: authTypes.LOGIN_START,
    payload: emailAndPassword   
})

export const loginSuccess = (data) => {
 return   {
    type: authTypes.LOGIN_SUCCESS,
    payload: data
}
    
}


export const loginFailure = (error) => {

  return  {
    type: authTypes.LOGIN_FAILURE,
    payload:error
}

}

export const logout = () => {
  
  return  {
    type: authTypes.LOGOUT
    }
}


