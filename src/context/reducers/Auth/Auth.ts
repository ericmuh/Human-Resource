// Auth Reducer

import { LOGIN_USER } from "../../actions/actionTypes"

export const initialState = {
  isLoggedIn:false
}

interface Action{
  type:string,
  payload:Object
}

const authReducer=(state = initialState, { type, payload }:Action) => {
  switch (type) {

  case LOGIN_USER:
    return {isLoggedIn:true}

  default:
    return state
  }
}
export default authReducer