import {takeLatest , call , put , all} from 'redux-saga/effects';
import axios from 'axios';
import { toast } from "react-toastify";
import {authTypes} from "./auth.types";
import {loginSuccess , loginFailure} from "./auth.actions";

export function * login({payload: {email , password}}) {

    try{
        const data = yield axios.post(`/api/v1/auth/login` , {
            email,
            password
        });

        // console.log(data);
        yield put(loginSuccess(data.data.token));
        toast.success("MY SUCCESS");

    }
    catch(error){
        yield put(loginFailure(error.message));
    }

}

export function * onLoginStart() {
    console.log(`onLoginStart`);
    yield takeLatest(authTypes.LOGIN_START ,
         login);
}


export function * authSagas() {    
    yield all([call(onLoginStart)])
}