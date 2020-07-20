import React from "react";

function DataTable(props) {
    return (

        <table className="table">
            <thead>
                <tr className="tr-header">
                    {props.columns.map(column => (                        
                        <th onClick={() => props.handleSort(column.colName)} className="remove" scope="col" key={column.colName}>{column.colName}</th>
                    ))}
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