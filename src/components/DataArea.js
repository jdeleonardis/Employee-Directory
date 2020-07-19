import React, { Component } from "react";
import API from "../utils/API";
import Nav from "./Nav";
import DataTable from "./DataTable";

class DataArea extends Component {
  state = {
    originalEmployees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    this.loadEmployeeData();    
  }

  handleSearchChange = event => {
    const newFilteredEmployees = this.state.originalEmployees.filter(employee => employee.name.first.includes(event.target.value) || employee.name.last.includes(event.target.value));    
    this.setState({ filteredEmployees: newFilteredEmployees });
  };

  headings() {

  }
  
  handleSort() {

  }  

  loadEmployeeData = () => {
    API.getEmployeeList()
      .then(res => 
        this.setState({
          originalEmployees: res.data.results,
          filteredEmployees: res.data.results
        })
      )
      .catch(err => console.log(err));
  };

  render() {
      return (
        <div>
            <Nav handleSearchChange={this.handleSearchChange} />
            <DataTable filteredEmployees={this.state.filteredEmployees} />

        </div>
      );
  }
};

export default DataArea;