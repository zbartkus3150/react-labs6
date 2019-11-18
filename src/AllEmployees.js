import React from 'react'
import Employee from './Employee'

const AllEmployees = (props) =>{
    const allemployees = props.employee.map(EmployeeData =>
        <Employee key={EmployeeData.id} data={EmployeeData} deleteUser={props.delete} delID={props.delID}/>)
    return(
        <div>
            {allemployees}
        </div>
    )
}
export default AllEmployees