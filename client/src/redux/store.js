import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers/all';
import thunkMiddleware from 'redux-thunk';
let createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware)
)(createStore);

export default createStoreWithMiddleware(reducers);