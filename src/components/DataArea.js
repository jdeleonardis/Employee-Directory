import React, { Component } from "react";
import API from "../utils/API";
import Nav from "./Nav";
import DataTable from "./DataTable";
//import Card from "../components/Card";
//import Alert from "../components/Alert";

class DataArea extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadInitialData();
  }

  handleSearchChange() {
    alert("madeit")

  }

  headings() {

  }
  
  handleSort() {

  }  

  loadInitialData() {

  }

  render() {
      return (
        <div>
            <Nav handleSearchChange={this.handleSearchChange} />

        </div>
      );
  }
};

export default DataArea;