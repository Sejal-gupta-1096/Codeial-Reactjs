import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from '../reducers/index';

let store;

export function configureStore(){
    store = createStore(combinedReducer , applyMiddleware(thunk));
    return store;
}