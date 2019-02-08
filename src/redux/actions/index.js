import { USER_UPDATE ,TRANSACTIONS , USER_INFO} from '../types/index'
import axios from 'axios';


export const userInfo = (user) => ({
      type: USER_INFO,
      user  
  })
  export const userUpdate = (user) => ({
    type:USER_UPDATE,
    user  
})

  export const transactions = (transaction) => ({
    type: TRANSACTIONS,
    transaction  
})