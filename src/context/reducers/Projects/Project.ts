import { IProjects, IReducerAction } from "../../../common/types";
import { retrieveFromLocalStorage } from "../../../Utils/LocalStorage";
import {
  ADD_PROJECT_SUMMARY,
  ADD_PROJECT_MOVEMENT,
  ADD_PROJECT_SUPPLY,
  ADD_PROJECT_TEAM,
  ADD_PROJECT_WORK_PLAN,
  ADD_PROJECT_MILESTONES,
  GET_FORM_DATA_PROJECT,
  GET_ALL_PROJECTS,
} from "../../actions/actionTypes";

export const initialState: IProjects = {
  all_projects: {
    projects: [],
    workplans: [],
    supplys: [],
    teams: [],
    movements: [],
  },
  project_summary: {},
  project_workplan: {},
  project_supply: [],
  project_team: [],
  project_milestones: [],
  project_movement: {},
};

const projectReducer = (state: any, { type, payload }: IReducerAction) => {
  switch (type) {
    case ADD_PROJECT_SUMMARY:
      return {
        ...state,
        project_summary: payload,
      };
    case ADD_PROJECT_WORK_PLAN:
      return {
        ...state,
        project_workplan: payload,
      };
    case ADD_PROJECT_MILESTONES:
      console.log({ state });
      return {
        ...state,
        project_milestones: payload,
      };
    case ADD_PROJECT_SUPPLY:
      return {
        ...state,
        project_supply: payload,
      };
    case ADD_PROJECT_MOVEMENT:
      return {
        ...state,
        project_movement: payload,
      };
    case ADD_PROJECT_TEAM:
      return {
        ...state,
        project_team: payload,
      };

    case GET_ALL_PROJECTS:
      return {
        ...state,
        all_projects: payload,
      };
    case GET_FORM_DATA_PROJECT:
      return state;

    default:
      return state;
  }
};
export default projectReducer;
