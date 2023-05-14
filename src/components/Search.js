import { useContext } from "react";
import Octicon from "react-octicon";
import { SearchContext } from "../context/SearchContext";
import { InputSearchBox, InputSearchField, SearchContainer } from "./styles";
import { SearchContextKey } from "../utils/constant";

const { USER_NAME } = SearchContextKey;

const Search = () => {
  const { state, dispatch } = useContext(SearchContext);
  const { userName } = state;

  //  this will be executed when type on input field and stores the result in context for passing data into another component
  const handleSearchInput = ({ target: { value } }) => {
    dispatch({ type: USER_NAME, payload: value });
  };

  return (
    <SearchContainer>
      <InputSearchBox>
        <Octicon name="search" />
        <InputSearchField
          placeholder="Search Gists for the username"
          value={userName}
          onChange={handleSearchInput}
        />
      </InputSearchBox>
    </SearchContainer>
  );
};


export default Search;
