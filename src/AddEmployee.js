import React from 'react'

class AddEmployee extends React.Component {
    render(){
        return(
            <div style={{width:'200px', clear:'both'}}>
                <form>
                    <p>Id: <br/><input disabled></input></p>
                    <p>Name: <input></input></p>
                    <p>Age: <input type='number'></input></p>
                    <p>Company: <input></input></p>
                    <p>Email: <input></input></p>
                    <p>Is Active: <input type='checkbox'></input></p>
                    <button onClick={() => this.props.Addbuttonhandler()} >Submit</button>
                    <button onClick={() => this.props.Addbuttonhandler()} >Cancel</button>
                </form><br/>
            </div>
        )
    }
}

export default AddEmployee