import {combineReducers} from 'redux';
import contactReducer from './contact';
import projectsReducer from './projects';
const reducers = combineReducers({
    contactReducer,
    projectsReducer
})

export default reducers;