import { SIGNIN_LOADING, SIGNIN_USER, SIGNIN_ERROR } from "../type";

const initialState ={
    loading: false,
    error: ''
}

export const SignInReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNIN_USER : {
            return{
                ...state,
            }
        }
        case SIGNIN_ERROR : {
            return{
                ...state,
                error : action.payload,
                loading : false
            }
        }
        case SIGNIN_LOADING : {
            return{
                ...state,
                loading: action.payload
            }
        }
        default: return state
    }
}