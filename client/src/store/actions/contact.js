import * as actionTypes from '../types';
import {SERVER} from '../../components/utils/misc';
import axios from 'axios';
export const submitContact = (submitdata) => {
    const req = axios.post(`${SERVER}/contact`, submitdata).then(res=> res.data).catch(err=> err.response.data);
    return {
        type:actionTypes.SUBMIT_CONTACT,
        payload:req
    }
}