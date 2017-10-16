import React from 'react';

const Search = props => {
  return (
    <div className="row">
      <div className="panel panel-default">
        <div className="panel-heading">
          <strong>
            <i className="fa fa-search" /> Search
          </strong>
        </div>
        <div className="panel-body">
          <form className="form">
            <div className="form-group">
              <label>Search Term:</label>
              <input
                onChange={props.handleInputChange}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search"
                id="searchTerm"
              />
            </div>
            <div className="form-group">
              <label>Begin Year(optional)</label>
              <input
                onChange={props.handleInputChange}
                name="start"
                type="text"
                className="form-control"
                placeholder="Format: YYYY"
              />
            </div>
            <div className="form-group">
              <label>End Year(optional)</label>
              <input
                onChange={props.handleInputChange}
                name="end"
                type="text"
                className="form-control"
                placeholder="Format: YYYY"
              />
            </div>
            <button
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn btn-default"
              id="runSearch"
            >
              <i className="fa fa-search" /> Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
