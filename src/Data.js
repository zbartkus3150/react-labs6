import React from 'react'
import AllEmployees from './AllEmployees'
import AddEmployee from './AddEmployee';
class Data extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            employees: [],
            isLoading: false,
            adding: false
        };
        this.componentGet = this.componentGet.bind(this);
        this.Addbuttonhandler= this.Addbuttonhandler.bind(this);
	}

	componentDidMount() {
        this.componentGet();
    }

    componentGet(){
        this.setState({ isLoading: true, adding: false });

        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response}))
        .then(() => this.setState({isLoading: false}));
        
    }

    Addbuttonhandler = () =>{
        this.setState({adding: !this.state.adding});
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        if(this.state.adding){
            return(
                <div>
                Data loaded: {this.state.employees.length}<br/>
                <AddEmployee Addbuttonhandler={this.Addbuttonhandler} reload={this.componentGet}/>
                <AllEmployees employee={this.state.employees}/>
                </div>
            )
        }
		return (
            <div>
                Data loaded: {this.state.employees.length}<br/>
                <button onClick={this.Addbuttonhandler} style={{padding:'5px', margin:'10px'}}>Add employee</button>
                <AllEmployees employee={this.state.employees}/>
            </div>

		)
	}
}

export default Data 