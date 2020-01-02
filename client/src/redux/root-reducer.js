import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bootcampReducer from './bootcamp/bootcamp.reducer';
import authReducer from './auth/auth.reducer';
import reviewReducer from './review/review.reducer';


const persistConfig = {
    key: 'root',
    storage,
   whitelist:[]
   //whitelist:[`authState` , `bootcampState`]
}

const rootReducer = combineReducers({
    bootcampState: bootcampReducer,
    authState: authReducer,
    reviewState: reviewReducer
})

export default persistReducer(persistConfig , rootReducer);


