import React from "react";

function DataTable(props) {
    return (
        <ul className="list-group">
          {props.filteredEmployees.map(employee => (            
            <li className="list-group-item" key={employee.email}>
              <img alt="employee pic" src={employee.picture.thumbnail}/> {employee.name.first + " " + employee.name.last} {employee.phone} {employee.email} {employee.dob.date}
            </li>
          ))}
        </ul>
      );
}

export default DataTable;