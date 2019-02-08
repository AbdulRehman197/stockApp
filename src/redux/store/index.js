import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import stockapp from '../reducers/index'
const intialState = {};
const middleware = [thunk]

const store = createStore(stockapp, intialState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

))

export default store