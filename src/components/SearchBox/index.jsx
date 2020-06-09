import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTVShows } from "../../store/shows/actions";
import ShowListContainer from "../ShowList";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchTVShows(state.search));
    setState({search: ""});
  };

  return (
    <div>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search by name"
            name="search"
            value={state.search}
          />
          <button>Search!</button>
        </form>
      </div>
      <ShowListContainer />
    </div>
  );
};

export default SearchBox;
