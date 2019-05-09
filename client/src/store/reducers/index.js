import {combineReducers} from 'redux';
import contact from './contact';
import projects from './projects';
const reducers = combineReducers({
    contact,
    projects
})

export default reducers;