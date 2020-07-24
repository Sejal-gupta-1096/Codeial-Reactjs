import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducer from '../reducers/index';

let store;

export function configureStore(){
    store = createStore(combinedReducer , applyMiddleware(logger, thunk));
    return store;
}