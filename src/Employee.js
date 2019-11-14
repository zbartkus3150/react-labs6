import React from 'react'

function Employee(props){
    return(
        <div style={{padding:'10px'}}>
            <p>Name: {props.data.name}</p>
            <p>Age: {props.data.age}</p>
            <p>Company: {props.data.company}</p>
            <p>Email: {props.data.email}</p>
            <p>IsActive: {props.data.isActive.toString()}</p>
        </div>
    )
}
export default Employee