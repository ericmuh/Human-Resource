import { IOperations, IReducerAction } from "../../../common/types";
import {
  ADD_LOCATION,
  GET_LOCATION,
  GET_LOCATION_OPTIONS,
  ADD_DONOR,
  GET_DONOR,
  GET_DONOR_OPTIONS,
  ADD_VENDOR,
  GET_VENDOR,
  GET_VENDOR_OPTIONS,
} from "../../actions/actionTypes";

export const initialState: IOperations = {
  locations: [],
  donors: [],
  vendors: [],
};

const operationReducer = (state: any, { type, payload }: IReducerAction) => {
  switch (type) {
    case ADD_DONOR:
      return {
        ...state,
        donors: [...state.donors, payload],
      };

    case GET_DONOR:
      return {
        ...state,
        donors: payload,
      };
    case GET_DONOR_OPTIONS:
      return {
        ...state,
        donors: payload,
      };

    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, payload],
      };

    case GET_LOCATION:
      return {
        ...state,
        locations: payload,
      };
    case GET_LOCATION_OPTIONS:
      return {
        ...state,
        locations: payload,
      };
    case ADD_VENDOR:
      return {
        ...state,
        locations: [...state.locations, payload],
      };

    case GET_VENDOR:
      return {
        ...state,
        vendors: payload,
      };
    case GET_VENDOR_OPTIONS:
      return {
        ...state,
        vendors: payload,
      };
    default:
      return state;
  }
};
export default operationReducer;
