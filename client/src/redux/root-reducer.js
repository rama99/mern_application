import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bootcampReducer from './bootcamp/bootcamp.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    bootcamp: bootcampReducer
})

export default persistReducer(persistConfig , rootReducer);


