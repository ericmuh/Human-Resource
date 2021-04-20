// PROGAMMATICTAPPROACH LIST CONTEXT
import React, { createContext, useReducer } from "react";
import { IProgram } from "../../../common/types";
import programReducer, { initialState } from "../../reducers/Programs/Program";

interface IProgramContext {
  programs: IProgram;
  dispatch: React.Dispatch<any>;
}

export const ProgramContext = createContext<IProgramContext>({
  programs: initialState,
  dispatch: () => {},
});

const ProgramContextProvider: React.FC<React.ReactNode> = (props: any) => {
  const [state, dispatch] = useReducer(programReducer, initialState);

  return (
    <ProgramContext.Provider value={{ programs: state, dispatch }}>
      {props.children}
    </ProgramContext.Provider>
  );
};

export default ProgramContextProvider;
