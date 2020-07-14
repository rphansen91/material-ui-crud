import React, { createContext, useContext, useState, FC } from "react";

const searchState = {
  searchText: "",
  submittedText: "",
};

const searchActions = {
  setSearchText: (text: string) => {
    console.warn("SearchProvider not found");
  },
  setSubmittedText: (text: string) => {
    console.warn("SearchProvider not found");
  },
};

export type ISearchContext = [typeof searchState, typeof searchActions];
export const SearchContext = createContext<ISearchContext>([
  searchState,
  searchActions,
]);

export const SearchProvider: FC = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  return (
    <SearchContext.Provider
      value={[
        { searchText, submittedText },
        { setSearchText, setSubmittedText },
      ]}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
