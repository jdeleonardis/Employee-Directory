import React from "react";
import '../styles/searchbox.css';

function SearchForm(props) {
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center">
                <input 
                    type="text" 
                    className="form-control"
                    onChange={props.handleSearchChange}
                    placeholder="Search"
                />
            </div>
        </div>
    </div>

//<input type="text" className="form-control" />
    // <form className="search">
    //   <div className="form-group">        
    //     <input
    //       //value={props.search}
    //       onChange={props.handleSearchChange}
    //       name="search"
    //       type="text"
    //       className="form-control"
    //       placeholder="Search"
    //     />
    //   </div>
    // </form>
  );
}

export default SearchForm;