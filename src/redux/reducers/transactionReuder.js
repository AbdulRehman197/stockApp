import 
 { 
  TRANSACTIONS
}
   from '../types/index'
  
 const initialState = []
  const  transInformation = (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTIONS:
        return [...state , 
          ...action.transaction]

        
      default:
        return state
    }
  }

export default  transInformation;