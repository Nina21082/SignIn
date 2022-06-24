import {
  SIGNUP_USER,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_INIT,
  SIGNIN_LOADING,
  SIGNIN_USER,
  SIGNIN_ERROR,
  SIGNIN_INIT,
  OPEN_PROFILE
} from "../type";
import { http } from "../module/http";
export const signUpInitAction = { type: SIGNUP_INIT };
export const signInInitAction = { type: SIGNIN_INIT };
export const signUpAction = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_LOADING,
      payload: true
    });
    const { data: resp } = await http.post("/auth/sign-up", data);
    const token = resp.response.token;
    localStorage.setItem("token", token);
    dispatch({
      type: SIGNUP_USER,
    });
    dispatch({
      type: OPEN_PROFILE,
      payload: resp.response.openProfile
    });

  } catch (error) {
    console.log(error)
    if (error?.response?.data?.response) {
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.response.data.response,
      });
    } else if (error.message){
      console.log(error.message)
        console.log('first')
      dispatch({
        type: SIGNUP_ERROR,
        payload: error.message,
      });
    } else {
        console.log('first2')
      dispatch({
        type: SIGNUP_ERROR,
        payload: "Unknown error",
      });
    }
  }
};
export const signInAction = (data) => async (dispatch) => {
  dispatch({
    type: SIGNIN_LOADING,
    payload: true
  });
  try{
    const {data: resp} = await http.post("/auth/sign-in", data)
      console.log(222, resp);
      const token  = resp.response.token;
      localStorage.setItem("token", token);
      dispatch({
        type: SIGNIN_USER,
        payload: resp.data,
      });
  } 
  catch (error){
    console.log(error);
    if(error?.response?.data?.message){
      console.log(error.response.data.message)

      dispatch({
        type: SIGNIN_ERROR,
        payload: error.response.data.message,
    });
    }else if(error.message){
      console.log('first')
      dispatch({
        type: SIGNIN_ERROR,
        payload: error.message
      });
    }else {
      dispatch({
        type: SIGNIN_ERROR,
        payload: 'Unknown error'
      })
    }
  }
};
