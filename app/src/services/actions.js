import {
  UPDATE_PAGE,
  CLOSE_CODE,
  OPEN_CODE,
  OPEN_TERMINAL,
  CLOSE_TERMINAL,
} from "../services/types";

export const updatePage = (newPage) => (dispatch) => {
  dispatch({ type: UPDATE_PAGE, payload: newPage });
};

export const closeCoder = () => (dispatch) => {
  dispatch({ type: CLOSE_CODE, payload: false });
};

export const openCoder = () => (dispatch) => {
  dispatch({ type: OPEN_CODE, paload: true });
};

export const openTerminal = () => (dispatch) => {
  dispatch({ type: OPEN_TERMINAL, payload: true });
};

export const closeTerminal = () => (dispatch) => {
  dispatch({ type: CLOSE_TERMINAL, payload: false });
};
