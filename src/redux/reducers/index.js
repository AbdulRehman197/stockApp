import { combineReducers } from 'redux'
import userInformation from './userReducer'
import transInformation from './transactionReuder'

const stockapp = combineReducers({
    userInformation,
    transInformation
})

export default stockapp

