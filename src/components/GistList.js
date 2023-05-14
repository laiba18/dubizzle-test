import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { getGistForUser, getPublicGists } from "../services/gistService";
import useBoolean from "../hooks/useBoolean";
import Gist from "./Gist";
import { GitListContainer } from "./styles";
import { debounceTimeOut } from "../utils/constant";

const GistList = () => {
  const { state } = useContext(SearchContext);
  const { userName } = state;
  const [isLoading, openIsLoading, closeIsLoading] = useBoolean();
  const [count, setCount] = useState(0);
  const [gistList, setGistList] = useState([]);

  //  api call for fetch git list
  const fetchGitList = async () => {
    try {
      openIsLoading();
      const { data: gitData } = await getPublicGists();
      setGistList(gitData);
    } catch (error) {
      alert(error);
    } finally {
      closeIsLoading();
    }
  };

  // api call if enter user name then search those results that matches the input
  const getSearchInput = async (userName) => {
    try {
      openIsLoading();
      const { data: searchData } = await getGistForUser(userName);
      setGistList(searchData);
    } catch (error) {
      alert(error);
    } finally {
      closeIsLoading()
    }
  };

  //  will execute on mount and updates.
  useEffect(() => {
    setCount((prevState) => prevState + 1);
    fetchGitList();
  }, []);

  useEffect(() => {
    //  this will execute in after 3 seconds.
    const getData = setTimeout(() => {
      if (userName) {
        getSearchInput(userName);
      } else {
        if (count > 0) {
          fetchGitList();
        }
      }
    }, [debounceTimeOut]);

    //  this should be for unmounting
    return () => clearTimeout(getData);
  }, [userName]);

  return (
    <GitListContainer>
      {/*  if loading starts for waiting for api result then show loading */}
      {isLoading &&
        <h5>Loading...</h5>
      }
      {gistList.length > 0 ?
        //  render git list 
        gistList.map((gist, index) => <Gist key={index} gist={gist} />)
        :
        //  render no result found if not found any data in list
        <h3>No Result Found</h3>
      }
    </GitListContainer>
  );
};

export default GistList;
