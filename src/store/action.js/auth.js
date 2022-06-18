import { SIGNUP_USER, SIGNUP_ERROR, SIGNUP_LOADING } from '../type';
import {SIGNIN_LOADING, SIGNIN_USER, SIGNIN_ERROR} from '../type'
import { http } from '../module/http';



export const signUp = (data) => async dispatch =>{

    dispatch({
        type: SIGNUP_LOADING,
        payload: ''
    })
    try{
        http.post('/auth/sign-up', data)
        console.log(data)
        .then(res => {
            const {token} = res.data.response
            localStorage.setItem('token', token)
            dispatch({
                type:  SIGNUP_USER,
                payload: res.data
            })
        })
    }catch(error){
        dispatch({
            type: SIGNUP_ERROR,
            payload: error.res
        })
    }

}
export const signIn = (data) => async dispatch =>{

    dispatch({
        type: SIGNIN_LOADING,
        payload: ''
    })
    try{
        http.post('/auth/sign-in', data)
        .then(res => {
            console.log(222, res)
            const {token} = res.data.response;
            localStorage.setItem('token', token)
            dispatch({
                type:  SIGNIN_USER,
                payload: res.data
            })
        })
    }catch(error){
        dispatch({
            type: SIGNIN_ERROR,
            payload: error.response.massage
        })

    }
}