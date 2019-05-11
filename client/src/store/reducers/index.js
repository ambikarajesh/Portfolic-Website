import {combineReducers} from 'redux';
import contactReducer from './contact';
import projectsReducer from './projects';
import userReducer from './user';
const reducers = combineReducers({
    contactReducer,
    projectsReducer,
    userReducer
})

export default reducers;