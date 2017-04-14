import React, { Component } from 'react';
//import './LevelKeyValue.css';

class StringAttribute extends Component {

	constructor(props) {
	  super(props);
	  this.state={ value: this.props.value, modified: '', editing: !this.props.value, modifiedValue: ''};
	  this.setEditMode = this.setEditMode.bind(this);
	  this.setValue = this.setValue.bind(this);
	  this.updateValue = this.updateValue.bind(this);
	  this.handleKeyDown = this.handleKeyDown.bind(this);

	}

	setEditMode() {
		this.setState({editing: true});
	}

	setValue() {
		if (this.state.modified)
			this.props.createAttribute(this.props.attrkey, this.state.value);
		this.setState({editing: false})
	}

	updateValue(event) {
		this.setState({value: event.target.value, modified: event.target.value !== this.props.value});
	}

	handleKeyDown(event) {
		if(event.which === 13)
			this.setValue();
	}

	render() {
		var className = 'stringAttr';
		if ( !this.state.editing)
			return <span onClick={this.setEditMode} className={className}>{this.props.value}</span>;
		else
			return <input value={this.state.value} 
						  ref="input"
						  onChange={this.updateValue} 
						  onBlur={this.setValue}  
						  onKeyDown={this.handleKeyDown} />;
	}
}

export default StringAttribute;