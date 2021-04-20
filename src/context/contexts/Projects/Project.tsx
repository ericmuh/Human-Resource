import * as React from "react";
import { IProjects } from "../../../common/types";
import projectReducer, { initialState } from "../../reducers/Projects/Project";

interface IProjectContext {
  projects: IProjects;
  dispatch: React.Dispatch<any>;
}

export const ProjectContext = React.createContext<IProjectContext>({
  projects: initialState,
  dispatch: () => {},
});

const ProjectContextProvider: React.FC<React.ReactNode> = (props: any) => {
  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ projects: state, dispatch }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
