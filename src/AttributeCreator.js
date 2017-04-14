import React, { Component } from 'react';
//import './LevelKeyValue.css';

class AttributeCreator extends Component {

	constructor(props) {
	  super(props);
	  this.state={ creating: false, modifiedValue: '', type: ''};
	  this.handleCreate = this.handleCreate.bind(this);
	  this.handleCancel = this.handleCancel.bind(this);
	  this.changeType = this.changeType.bind(this);
	  this.changeKey = this.changeKey.bind(this);
	  this.createAttribute = this.createAttribute.bind(this);

	}

	handleCreate() {
		this.setState({creating: true});
	}

	handleCancel() {
		this.setState({creating: false});
	}

	changeType(event) {
		this.setState({type: event.target.value});
	}

	changeKey(event) {
		this.setState({attrkey: event.target.value});
	}

	createAttribute() {
		const typeDefaultValues = {
			string: '',
			object: {},
			array: []
		}
		var currentType = 'string';
		if (this.state.type !== '')
			currentType = this.state.type;

		if (typeof this.props.attrkey !== 'undefined') {
			this.props.createAttribute(this.props.attrkey, typeDefaultValues[currentType])
		}
		else {
			this.props.createAttribute(this.state.attrkey, typeDefaultValues[currentType])
		}
		this.setState({creating: false, modifiedValue: ''});
		
	}

	render() {
		if ( !this.state.creating)
				return <a href="#" onClick={this.handleCreate}>+ Add {this.props.type}</a>
		var attrName;
		if(typeof this.props.attrkey !== 'undefined')
			attrName = <span className="attrName">{this.props.attrkey}:</span>;
		else {
			attrName = [
				<input ref="keyInput" type="text" value={this.state.value} onChange={this.changeKey}/>,
				<span>:</span>
			];
		}

		return (
			<div className="hashAttribute">
				{attrName}
				<select value={this.state.type} onChange={this.changeType} ref="typeSelector">
					<option value="string">String</option>
					<option value="array">List</option>
					<option value="object">Object</option>
				</select>
				<button onClick={ this.createAttribute}>OK</button>,
				<a href="#" className="cancelAttr" onClick={this.handleCancel}>Cancel</a>
			</div>
		);
	}
}

export default AttributeCreator;