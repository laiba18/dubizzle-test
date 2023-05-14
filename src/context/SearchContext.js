import React, { createContext, useReducer } from "react";
import { SearchContextKey } from "../utils/constant";

const { USER_NAME } = SearchContextKey;

export const SearchContext = createContext();
// set initial state
const initialState = {
  userName: "",
};

//  set reducer
const reducer = (state, action) => {
  switch (action.type) {
    case USER_NAME:
      return {
        state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
