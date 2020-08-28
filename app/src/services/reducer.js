import LOADING, { UPDATE_PAGE } from "./types";

const initialState = {
  loading: false,
  page: "about.md",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_PAGE:
      return { ...state, page: action.payload };
    default:
      return { ...state };
  }
};
