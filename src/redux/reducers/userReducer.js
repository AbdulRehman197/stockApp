import 
 { USER_INFO , USER_UPDATE
}
   from '../types/index'
  
 const initialState =  {
   
  payload:{}
 } 
  const  userInformation = (state = initialState, action) => {
    switch (action.type) {
      case USER_INFO:
        return Object.assign({}, state, {
          payload: action.user
        })
        case USER_UPDATE:
        return Object.assign({}, state, {
          payload: action.user
        })
       
      default:
        return state
    }
  }

  export default  userInformation;