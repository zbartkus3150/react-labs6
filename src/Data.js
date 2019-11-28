import { withRouter } from "react-router-dom";
import React from 'react'
import PageEmployeesList  from './PageEmployeesList '
import PageEmployee from './PageEmployee';
class Data extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            employees: [],
            isLoading: false,
            adding: false,
            deletedID: ""
        };
        this.componentGet = this.componentGet.bind(this);
        this.Addbuttonhandler= this.Addbuttonhandler.bind(this);
        this.componentDelete = this.componentDelete.bind(this);
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

    Addbuttonhandler = () =>{
        this.setState({adding: !this.state.adding});
    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
        /*if(this.state.adding){
            return(
                <div>
                Data loaded: {this.state.employees.length}<br/>
                <PageEmployee Addbuttonhandler={this.Addbuttonhandler} reload={this.componentGet}/>
                <PageEmployeesList  employee={this.state.employees} delete={this.componentDelete} delID={this.state.deletedID}/>
                </div>
            )
        }*/
		return (
            <div>
                Data loaded: {this.state.employees.length}<br/>
                <button onClick={this.Addbuttonhandler} style={{padding:'5px', margin:'10px'}}>Add employee</button>
                <PageEmployeesList  employee={this.state.employees} delete={this.componentDelete} delID={this.state.deletedID}/>
            </div>

		)
	}
}

export default withRouter(Data);