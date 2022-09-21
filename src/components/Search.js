import React from "react";

function Search({ handleSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    return handleSearch(e.target.firstChild.value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        defaultValue={""}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
