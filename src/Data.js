import React from 'react'
import AllEmployees from './AllEmployees'
class Data extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            employees: [],
            isLoading: false
        };
	}

	componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(response => this.setState({ employees: response}))
        .then(() => this.setState({isLoading: false}));
        
    }
    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
		return (
            <div>
                <AllEmployees employee={this.state.employees}/>
            </div>

		)
	}
}

export default Data 