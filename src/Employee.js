import React from 'react'

function Employee(props){
    return(
        <div style={{padding:'10px'}}>
            {props.delID==props.data.id?
            <label>Deleting...</label>:
            <div>
                <p>Id: {props.data.id}</p>
                <p>Active: {props.data.isActive.toString()}</p>
                <p>Age: {props.data.age}</p>
                <p>Name: {props.data.name}</p>               
                <p>Company: {props.data.company}</p>                
                <p>Email: {props.data.email}</p>
                <p><button onClick={() => {props.deleteUser([props.data.id])}}>Delete</button></p>
            </div>
            }
        </div>
    )
}
export default Employee