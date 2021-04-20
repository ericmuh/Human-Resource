// DONOR LIST CONTEXT
import React, { createContext, useReducer } from "react";
import { IPublications } from "../../../common/types";
import publicationsReducer, { initialState } from "../../reducers/Publications/Publication"

export interface IPublicationsContext {
  publications:IPublications;
  dispatch: React.Dispatch<any>;
}

export const PublicationContext = createContext<IPublicationsContext>({
  publications: initialState,
  dispatch: () => {},
});

const PublicationContextProvider: React.FC<React.ReactNode> = (props: any) => {
  const [state, dispatch] = useReducer(publicationsReducer, initialState);
  return (
    <PublicationContext.Provider value={{publications: state, dispatch }}>
      {props.children}
    </PublicationContext.Provider>
  );
};

export default PublicationContextProvider;
