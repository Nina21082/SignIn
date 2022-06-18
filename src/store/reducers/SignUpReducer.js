import { SIGNUP_USER, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_INIT } from "../type";

const initialState ={
    loading: false,
    error: null,
    successMessage: null,
}

export const signUpReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNUP_USER : {
            return{
                ...state,
                successMessage: 'User have registered successfully!',
                loading: false,
            }
        }
        case SIGNUP_ERROR : {
            return{
                ...state,
                error : action.payload,
                loading : false
            }
        }
        case SIGNUP_LOADING : {
            return{
                ...state,
                loading: true,
            }
        }
        case SIGNUP_INIT : {
            return initialState
        }
        
        default: return state
    }

}