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