import * as actionTypes from '../types';
import {SERVER} from '../../components/utils/misc';
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchUserStart = () => {
    return {
        type:actionTypes.FETCH_USER_START
    }
}
export const fetchUserSuccess = (userId) => {
    return{
        type:actionTypes.FETCH_USER_SUCCESS,
        userId:userId
    }
}

export const fetchUserFail = () => {
    return {
        type: actionTypes.FETCH_USER_FAIL
    }
}
export const fetchUser = (user) =>{
    console.log(user)
    return dispatch => {
        dispatch(fetchUserStart());
        axios.post(`${SERVER}/admin/login`, user).then(res=> {
            console.log(res)
            if(res.data.status === '00'){
                Cookies.set('userId', res.data.userId);
                dispatch(fetchUserSuccess(res.data.userId))                
            }
        }).catch(err=> {
            console.log(err.response.data)
            dispatch(fetchUserFail());
        });
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
        }).catch(err=> console.log(err))        
    }
}

export const retainState = () => {
    console.log('retain state')
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