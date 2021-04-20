import { IProgram, IReducerAction } from "../../../common/types";
import { retrieveFromLocalStorage } from "../../../Utils/LocalStorage";
import {
  ADD_PROGRAM_SUMMARY,
  ADD_MANAGEMENT_APPROACH,
  ADD_PROGRAMMATIC_APPROACH,
  GET_ALL_PROGRAMS,
  ADD_PROGRAM_INDICATORS,
  ADD_PROGRAM_MILESTONES,
  GET_FORM_DATA_PROGRAMS,
GET_PROGRAM_OPTIONS
} from "../../actions/actionTypes";

export const initialState: IProgram = {
  // all programs from getting api
  all_programs: {
    programs: [],
    programmatic_approaches: [],
    management_approaches: [],
    milestones: [],
    indicators: [],
  },
  
  // programs for posting to api
  program_summary: {},
  programmatic_approach: {},
  management_approach: {},
  program_milestones: [],
  program_indicators: [],
};

const programReducer = (state: any, { type, payload }: IReducerAction) => {
  switch (type) {
    case ADD_PROGRAM_SUMMARY:
      console.log({ state });

      return {
        ...state,
        program_summary: payload,
      };
    case ADD_PROGRAMMATIC_APPROACH:
      console.log({ state });

      return {
        ...state,
        programmatic_approach: payload,
      };
    case ADD_PROGRAM_INDICATORS:
      console.log({ state });

      return {
        ...state,
        program_indicators: payload,
      };
    case ADD_MANAGEMENT_APPROACH:
      return {
        ...state,
        management_approach: payload,
      };

    case ADD_PROGRAM_MILESTONES:
      return {
        ...state,
        program_milestones: payload,
      };
    case GET_ALL_PROGRAMS:
      return {
        ...state,
        all_programs: payload,
      };
    case GET_FORM_DATA_PROGRAMS:
      return {
        ...state,
      };
    case GET_PROGRAM_OPTIONS:
      return {
        ...state,
        programs: payload,
      };
    default:
      return state;
  }
};
export default programReducer;
