import React from "react";

function DataTable(props) {
    return (

        <table class="table">
            <thead>
                <tr>
                <th scope="col">Pic</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>                
                </tr>
            </thead>
            <tbody>
                {props.filteredEmployees.map(employee => (
                    <tr className="tr-stuff" key={employee.email}>
                        <td><img alt="employee pic" src={employee.picture.thumbnail}/></td>
                        <td>{employee.name.first + " " + employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.date}</td>                        
                    </tr>
                ))}
            </tbody>
        </table>
      );
}

export default DataTable;