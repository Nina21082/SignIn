import { SIGNUP_USER, SIGNUP_ERROR, SIGNUP_LOADING } from "../type";

const initialState ={
    loading: false,
    error: ''
}

export const SignUpReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGNUP_USER : {
            return{
                ...state,
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
                loading: action.payload
            }
        }
        
        default: return state
    }

}