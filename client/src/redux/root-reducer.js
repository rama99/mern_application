import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bootcampReducer from './bootcamp/bootcamp.reducer';
import authReducer from './auth/auth.reducer';


const persistConfig = {
    key: 'root',
    storage,
   // whitelist:['cart']
   whitelist:[`authState`]
}

const rootReducer = combineReducers({
    bootcampState: bootcampReducer,
    authState: authReducer
})

export default persistReducer(persistConfig , rootReducer);


