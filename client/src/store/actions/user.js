import * as actionTypes from '../types';
import {SERVER} from '../../components/utils/misc';
import axios from 'axios';
import Cookies from 'js-cookie';


export const fetchUserSuccess = (userId) => {
    return{
        type:actionTypes.FETCH_USER_SUCCESS,
        userId:userId
    }
}

export const fetchUser = (user) =>{
    const req = axios.post(`${SERVER}/admin/login`, user).then(res=> res.data).catch(err=> err.response.data);
    return {
        type:actionTypes.FETCH_USER,
        payload:req
    }    
}
export const setUserId = (userId) => {
    return dispatch => {
        Cookies.set('userId', userId);
        dispatch(fetchUserSuccess(userId))
    }
}

export const fetchLogout = () => {
    Cookies.remove('userId');
    return{
        type:actionTypes.LOGOUT
    }
} 

export const logout = () => {
    return dispatch => {
        axios.get(`${SERVER}/admin/logout`).then(res=>{
            if(res.data.status === '00'){
                dispatch(fetchLogout()); 
              }
        })       
    }
}

export const retainState = () => {
   return dispatch => {
        const token = Cookies.get('auth');
        if(token){
            const userId = Cookies.get('userId');
            if(userId){
                dispatch(fetchUserSuccess(userId))
            }
        }
    }
}