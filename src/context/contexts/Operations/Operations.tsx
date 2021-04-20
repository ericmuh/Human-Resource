// DONOR LIST CONTEXT
import React, { createContext, useReducer } from "react";
import { IOperations } from "../../../common/types";
import Operationsreducer, { initialState } from "../../reducers/Operations/Operation"

export interface IOperationsContext {
  operations:IOperations;
  dispatch: React.Dispatch<any>;
}

export const OperationContext = createContext<IOperationsContext>({
  operations: initialState,
  dispatch: () => {},
});

const OperationContextProvider: React.FC<React.ReactNode> = (props: any) => {
  const [state, dispatch] = useReducer(Operationsreducer, initialState);
  return (
    <OperationContext.Provider value={{operations: state, dispatch }}>
      {props.children}
    </OperationContext.Provider>
  );
};

export default OperationContextProvider;
