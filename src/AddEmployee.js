import React from 'react'

class AddEmployee extends React.Component {
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
        }).then(()=>this.props.reload());
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
                        />
                    </p>
                    <p>Age: <br/>
                        <input
                            name='age' 
                            type='number'
                            min='0' 
                            onChange={this.Changehandler}
                        />
                    </p>
                    <p>Company: 
                        <input 
                            name='company'
                            type='text' 
                            onChange={this.Changehandler}
                        />
                    </p>
                    <p>Email: 
                        <input 
                            name='email'
                            type='text' 
                            onChange={this.Changehandler}
                        />
                    </p>
                    <p>Is Active: 
                        <select name='isActive' onChange={this.Changehandler}>
                            <option value="false">false</option>
                            <option value="true">true</option>
                        </select>
                    </p>
                    <button onClick={this.Submitbuttonhandler} >Submit</button>
                    <button onClick={this.props.Addbuttonhandler} >Cancel</button>
                </form>}
                <br/>
            </div>
        )
    }
}

export default AddEmployee