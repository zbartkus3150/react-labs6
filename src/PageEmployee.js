import React from 'react'
import { withRouter, Link } from "react-router-dom";

class PageEmployee extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false,
            age: "",
            name: "",
            company: "",
            email: "",
            IsSaving: false,
        };
        this.Changehandler = this.Changehandler.bind(this);
        this.Submitbuttonhandler = this.Submitbuttonhandler.bind(this);
    }

    Submitbuttonhandler(){
        this.setState({IsSaving: true});
        fetch('http://localhost:3004/employees', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
			body: JSON.stringify( {
                "isActive": this.state.isActive,
                "age": this.state.age,
                "name": this.state.name,
                "company": this.state.nompany,
                "email": this.state.email
              }),
        }).then(() => {this.setState({ IsSaving: false })
        }).then(() => this.props.history.push("/"));
    }

    Changehandler(event){
        this.setState({ [event.target.name] : event.target.value });
    }

    render(){
        return(
            <div style={{width:'200px', clear:'both'}}>
                {this.state.IsSaving ? <label>Saving...</label>:
                <form>
                    <p>Id: <br/><input disabled></input></p>
                    <p>Name: 
                        <input
                            name='name' 
                            type='text' 
                            onChange={this.Changehandler}
                            required="required"
                        />
                    </p>
                    <p>Age: <br/>
                        <input
                            name='age' 
                            type='number'
                            min='0' 
                            onChange={this.Changehandler}
                            required="required"
                        />
                    </p>
                    <p>Company: 
                        <input 
                            name='company'
                            type='text' 
                            onChange={this.Changehandler}
                            required="required"
                        />
                    </p>
                    <p>Email: 
                        <input 
                            name='email'
                            type='text' 
                            onChange={this.Changehandler}
                            required="required"
                        />
                    </p>
                    <p>Is Active: 
                        <select name='isActive' onChange={this.Changehandler} required="required">
                            <option value="false">false</option>
                            <option value="true">true</option>
                            
                        </select>
                    </p>
                    <button onClick={this.Submitbuttonhandler} style={{padding:'5px', margin:'10px'}} >Submit</button>
                    <Link to="/">
                        <button style={{padding:'5px', margin:'10px'}}>
                            Cancel
                        </button>
                    </Link>
                </form>}
                <br/>
            </div>
        )
    }
}

export default withRouter(PageEmployee);