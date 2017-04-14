import React, { Component } from 'react';
//import './LevelKeyValue.css';
import StringAttribute from './StringAttribute';
import ObjectAttribute from './ObjectAttribute';
import ArrayAttribute from './ArrayAttribute';

class Attribute extends Component {

	constructor(props) {
	  super(props);
	  this.state={ modifiedValue: '' };
	  this.handleRemove = this.handleRemove.bind(this);
	  this.createAttributeElement = this.createAttributeElement.bind(this);

	}

	handleRemove() {
		this.props.removeAttribute(this.props.attrkey);
	}

	createAttributeElement() {
		var componentName = StringAttribute;

		if (this.props.value instanceof Array)
			componentName = ArrayAttribute;
		else if (this.props.value instanceof Object)
			componentName = ObjectAttribute;

		// return (<componentName 
		// 			value={this.props.value}
		// 			attrkey={this.props.attrkey}
		// 			parentType={this.props.parentType}

		// 		/>
		// );
		return React.createElement( componentName, {
			value: this.props.value,
			attrkey: this.props.attrkey,
			parentType: this.props.parentType,
			createAttribute: this.props.createAttribute,
			removeAttribute: this.props.removeAttribute,
			updateAttribute: this.props.updateAttribute
		});

	};

	render() {
		var typeAttribute = this.createAttributeElement();

		return (
			<div className="hashAttribute">
			<a href="#" className="attrRemove" onClick={this.handleRemove}>[x]</a>
			<span className="attrName">{this.props.attrkey}:</span>
			<span className="attrValue">{typeAttribute}</span>
			</div>
		);
	}
}

export default Attribute;