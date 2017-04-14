import React, { Component } from 'react';
import './AddKeyValue.css';

class AddKeyValue extends Component {
	constructor(props) {
		super(props);
		this.state = { value: ''};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addKeyValue = this.addKeyValue.bind(this);
	}
	handleUpdate(event) {
		this.setState({ value: event.target.value });
	}
	addKeyValue() {
		this.props.addKeyValue(this.state.value);
		this.setState({ value: '' });
	}

	render() {
		return (
			<div className="AddKeyValue">
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.value}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addKeyValue} >Add List Item</button>
			</div>
		);
	}
}

export default AddKeyValue;