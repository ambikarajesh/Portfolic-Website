import * as actionTypes from '../types';
const initialState = {
    userId:null
}
const reducer = (state=initialState, action) =>{
    switch(action.type){ 
        case actionTypes.FETCH_USER:
        return {
            ...state,
            payload:action.payload
        }       
        case actionTypes.FETCH_USER_START:
            return {
                ...state,            
            }
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                userId:action.userId
            }        
        case actionTypes.FETCH_USER_FAIL:
            return {
                ...state
            }
        case actionTypes.LOGOUT:
        return {
            ...state,
            userId:null
        }
        default:
            return state;
    }
}

export default reducer;