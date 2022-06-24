import { SIGNUP_USER, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_INIT,OPEN_PROFILE } from "../type";

const initialState ={
    loading: false,
    error: null,
    successMessage: null,
    openProfile: false,
    
}

export const signUpReducer = (state = initialState, action) => {
    console.log(action.type);
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
                loading: action.payload,
            }
        }
        case SIGNUP_INIT : {
            return initialState
        }
        case OPEN_PROFILE: {

            console.log(44);
            return{
                ...state,
                openProfile: action.payload
            }
            
        }
        
        default: return state
    }
    
}
