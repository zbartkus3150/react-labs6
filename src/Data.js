import { withRouter, Link } from "react-router-dom";
import React from 'react'
import PageEmployeesList  from './PageEmployeesList '
class Data extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            employees: [],
            isLoading: false,
            deletedID: ""
        };
        this.componentGet = this.componentGet.bind(this);
        this.componentDelete = this.componentDelete.bind(this);
	}

	componentDidMount() {
        this.componentGet();
    }

    componentGet(){
        this.setState({ isLoading: true });

        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response}))
        .then(() => this.setState({isLoading: false}));
        
    }

    componentDelete(userId){
        this.setState({deletedID:userId});
        fetch('http://localhost:3004/employees/'+userId, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({id:this.state.id})
        })
        .then(()=>this.setState({deletedID:""}))
        .then(this.componentGet)
      }


    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
		return (
            <div>
                Data loaded: {this.state.employees.length}<br/>
                <PageEmployeesList  employee={this.state.employees} delete={this.componentDelete} delID={this.state.deletedID}/>
                <Link to="/new">
                    <button style={{padding:'5px', margin:'10px'}}>
                        Create new employee
                    </button>
                </Link>
            </div>

		)
	}
}

export default withRouter(Data);