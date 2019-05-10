import * as actionTypes from '../types';
const initialState = {
    projects:[]
}
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.SUBMIT_PROJECT:
        return {
            ...state,
            payload:action.payload
        }
        case actionTypes.FETCH_PROJECTS_START:
            return {
                ...state,            
            }
        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                projects:action.projects
            }        
        case actionTypes.FETCH_PROJECTS_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default reducer;