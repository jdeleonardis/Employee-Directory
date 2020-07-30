import React, { Component } from "react";
import API from "../utils/API";
import Nav from "./Nav";
import DataTable from "./DataTable";
//import EmployeeData from "../employees.json"

class DataArea extends Component {
  state = {
    originalEmployees: [],
    filteredEmployees: [],
    columns: [
      {
        colName: "Picture",
        order: "D"
      },
      {
        colName: "Name",
        order: "D"
      },
      {
        colName: "Phone",
        order: "D"
      },
      {
        colName: "Email",
        order: "D"
      }, 
      {
        colName: "DOB",
        order: "D"
      }            

    ]
  };

  componentDidMount() {
    this.loadEmployeeData();    
  }

  handleSearchChange = event => {
    const newFilteredEmployees = this.state.originalEmployees.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()));    
    this.setState({ filteredEmployees: newFilteredEmployees });
  };
  
  handleSort(clickedColumn) {   
    let objIndex
    let sortedEmployees=[]
    let columnTracker=this.state.columns
    const obj = this.state.columns.find(column => column.colName === clickedColumn)
    let ascDesc = obj.order  //if this comes back as "D", it means it was sorted descending last time, so this time should be Asc
                               //and vice versa
    switch(clickedColumn) {
        case "Name":  
          if (ascDesc === "D") {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.name.first > b.name.first) ? 1:-1)
            objIndex = columnTracker.findIndex((obj => obj.colName === "Name"))
            columnTracker[objIndex].order = "A";
          }
          else {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.name.first > b.name.first) ? -1:1) 
            objIndex = columnTracker.findIndex((obj => obj.colName === "Name"))
            columnTracker[objIndex].order = "D";
          }
          break;

        case "Phone":  
          if (ascDesc === "D") {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.phone > b.phone) ? 1:-1)
            objIndex = columnTracker.findIndex((obj => obj.colName === "Phone"))
            columnTracker[objIndex].order = "A";
          }
          else {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.phone > b.phone) ? -1:1) 
            objIndex = columnTracker.findIndex((obj => obj.colName === "Phone"))
            columnTracker[objIndex].order = "D";
          }
          break;     
          
        case "Email":  
          if (ascDesc === "D") {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.email > b.email) ? 1:-1)
            objIndex = columnTracker.findIndex((obj => obj.colName === "Email"))
            columnTracker[objIndex].order = "A";
          }
          else {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.email > b.email) ? -1:1) 
            objIndex = columnTracker.findIndex((obj => obj.colName === "Email"))
            columnTracker[objIndex].order = "D";
          }
          break;    
          
        case "DOB":  
          if (ascDesc === "D") {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.dob.date > b.dob.date) ? 1:-1)
            objIndex = columnTracker.findIndex((obj => obj.colName === "DOB"))
            columnTracker[objIndex].order = "A";
          }
          else {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.dob.date > b.dob.date) ? -1:1) 
            objIndex = columnTracker.findIndex((obj => obj.colName === "DOB"))
            columnTracker[objIndex].order = "D";
          } 
          break;
        default:
          if (ascDesc === "D") {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.name.first > b.name.first) ? 1:-1)
            objIndex = columnTracker.findIndex((obj => obj.colName === "Picture"))
            columnTracker[objIndex].order = "A";
          }
          else {
            sortedEmployees = this.state.filteredEmployees.sort((a,b) => (a.name.first > b.name.first) ? -1:1) 
            objIndex = columnTracker.findIndex((obj => obj.colName === "Picture"))
            columnTracker[objIndex].order = "D";
          }
          break;                      
    }

    this.setState({ filteredEmployees: sortedEmployees,
                    columns: columnTracker});  

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
     
    // this.setState({
    //   originalEmployees: EmployeeData.results,
    //   filteredEmployees: EmployeeData.results
    // });
  };

  render() {
      return (
        <>
          <Nav handleSearchChange={this.handleSearchChange} />
          <div className="col-sm-12 d-flex justify-content-center">
              <DataTable 
                filteredEmployees={this.state.filteredEmployees}
                handleSort={this.handleSort.bind(this)}              
                columns={this.state.columns}
              />
          </div>
        </>
      );
  }
};

export default DataArea;