import {
  UPDATE_PAGE,
  LOADING,
  CLOSE_CODE,
  OPEN_CODE,
  OPEN_TERMINAL,
  CLOSE_TERMINAL,
} from "./types";

const initialState = {
  loading: false,
  page: "about.md",
  open: true,
  terminalOpen: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_PAGE:
      return { ...state, page: action.payload };
    case CLOSE_CODE:
      return { ...state, page: "about.md", open: false };
    case OPEN_CODE:
      return { ...state, open: true, terminalOpen: false };
    case OPEN_TERMINAL:
      return { ...state, open: false, terminalOpen: true };
    case CLOSE_TERMINAL:
      return { ...state, terminalOpen: false };
    default:
      return { ...state };
  }
};
