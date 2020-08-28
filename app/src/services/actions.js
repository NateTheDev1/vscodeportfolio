import { UPDATE_PAGE } from "../services/types";

export const updatePage = (newPage) => (dispatch) => {
  dispatch({ type: UPDATE_PAGE, payload: newPage });
  console.log(newPage);
};
