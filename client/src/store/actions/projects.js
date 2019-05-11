import * as actionTypes from '../types';
import {SERVER} from '../../components/utils/misc';
import axios from 'axios';
export const submitProject = (project) => {
    
    const req = axios.post(`${SERVER}/projects/add_project`, project).then(res=> res.data).catch(err=> err.response.data);
    return {
        type:actionTypes.SUBMIT_PROJECT,
        payload:req
    }
}

export const fetchProjectStart = () => {
    return {
        type:actionTypes.FETCH_PROJECTS_START
    }
}
export const fetchProjectsSuccess = (projects) => {
    return{
        type:actionTypes.FETCH_PROJECTS_SUCCESS,
        projects:projects
    }
}

export const fetchProjectsFail = () => {
    return {
        type: actionTypes.FETCH_PROJECTS_FAIL
    }
}
export const fetchProjects = () =>{
    return dispatch => {
        dispatch(fetchProjectStart());
        axios.get(`${SERVER}/projects`).then(res=> {
            if(res.data.status === '00'){
                dispatch(fetchProjectsSuccess(res.data.projects))
            }
        }).catch(err=> {
            dispatch(fetchProjectsFail());
        });
    }    
}