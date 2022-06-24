import { SIGNIN_LOADING, SIGNIN_USER, SIGNIN_ERROR, SIGNIN_INIT } from "../type";
const initialState ={
    loading: false,
    error: null,
}
export const signInReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNIN_USER : {
            return{
                ...state,
                loading: false
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
                error: null,
                loading: action.payload
            }
        }
        case SIGNIN_INIT : {
            return initialState
        }
        default: return state
    }
}