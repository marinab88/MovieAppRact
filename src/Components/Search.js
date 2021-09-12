import React from "react";

const Search = ({ handleSearch, handleSubmit }) => {

  return (
    <div>
      <header className="px-5 bg-dark">
        <div className="header d-flex">
          <h1 className="px-5 text-white fw-bold mt-1">Movies</h1>
            <form onSubmit={handleSubmit} 
                  className="bd-search position-relative mt-3">
              <input onChange={handleSearch}
                     className="search form-control  rounded-pill"
                     type="text"
                     placeholder="Search..."
              />
            </form>
        </div>
      </header>
    </div>
  );
}

export default Search;