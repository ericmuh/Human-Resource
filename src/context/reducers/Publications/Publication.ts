import { IPublications, IReducerAction } from "../../../common/types";
import {
  ADD_PUBLICATION,
  GET_PUBLICATION,
  
} from "../../actions/actionTypes";

export const initialState: IPublications = {
publications:[]
};

const publicationReducer = (state: any, { type, payload }: IReducerAction) => {
  switch (type) {
    case ADD_PUBLICATION:
      return {
        ...state,
        publications: payload
      };

    case GET_PUBLICATION:
      return {
        ...state,
        publications: payload,
      }

  
    default:
      return state;
  }
};
export default publicationReducer;
