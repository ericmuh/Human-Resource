import React, { createContext, useReducer } from "react";
import authReducer, { initialState } from "../../reducers/Auth/Auth";

export interface IAuthContext {
  isLoggedIn: Boolean;
  dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<IAuthContext>({isLoggedIn:false, dispatch:()=>{}});

const AuthContextProvider: React.FC<React.ReactNode> = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ isLoggedIn: state.isLoggedIn, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
