import * as actionTypes from '../types';
const initialState = {

}

const reducer = (state={initialState}, action) => {
    switch(action.type){
        case actionTypes.SUBMIT_CONTACT:
        return {
            ...state,
            payload:action.payload
        }
        default: 
            return state;
    }
}

export default reducer;