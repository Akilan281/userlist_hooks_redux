import {createStore , combineReducers} from 'redux'
import UserReducer from '../reducers/UserReducer'

const appReducers = combineReducers(
    {
        UserReducer
    }
)

const store = createStore(appReducers, {});

export default store;