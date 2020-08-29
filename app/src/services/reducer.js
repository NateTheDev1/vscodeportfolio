import { UPDATE_PAGE, LOADING, CLOSE_CODE, OPEN_CODE } from "./types";

const initialState = {
  loading: false,
  page: "about.md",
  open: true,
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
      return { ...state, open: true };
    default:
      return { ...state };
  }
};
