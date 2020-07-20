import React from "react";
import '../styles/searchbox.css';

function SearchForm(props) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
                <input 
                    value={props.search}
                    type="text" 
                    className="form-control"
                    onChange={props.handleSearchChange}
                    placeholder="Search"
                />
            </div>
        </div>
    </div>
  );
}

export default SearchForm;