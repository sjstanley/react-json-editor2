import React, { Component } from 'react';
//import './LevelKeyValue.css';
import Attribute from './Attribute';
import AttributeCreator from './AttributeCreator';

class ArrayAttribute extends Component {

	constructor(props) {
	  super(props);
	  this.state={value: this.props.value, editing: true };
	  this.toggleEditing = this.toggleEditing.bind(this);
	  this.removeAttribute = this.removeAttribute.bind(this);
	  this.createAttribute = this.createAttribute.bind(this);

	}

	removeAttribute(removeAttrKey) {
		const changedValue = this.state.value
		changedValue.splice(removeAttrKey, 1);
		this.setState({value: changedValue})
	}
	
	createAttribute(attrkey, value) {
		console.log('statevalue:', this.state.value)
		const changedValue = this.state.value;
		changedValue[attrkey] = value;
		this.setState({value: changedValue});
	}
	
	toggleEditing() {
		this.setState({ editing: !this.state.editing });
	}

	render() {
		var keys = Object.keys(this.props.value),
			openArray = '',
			className = this.state.editing ? 'open arrayAttr compoundAttr' : 'arrayAttr compoundAttr';

		var attrs = [];
		for (var i=0; i < this.props.value.length; i++) {
			attrs.push(
				<Attribute
					parentType={Array}
					value={this.props.value[i]}
					key={ i }
					attrkey={ i }
					removeAttribute={this.removeAttribute}
					createAttribute={this.createAttribute}
				/>
			);
		}

		openArray = (<div className="attrChildren">
			{attrs}
			<AttributeCreator type="element" parent={Object} attrkey={ keys.length } createAttribute={this.createAttribute} /> 
			</div>
		)

		return (
			<span className={className}>
			<span onClick={this.toggleEditing} className="hashToggle">List [{keys.length}]</span>
			{openArray}
			</span>
		)
	}
}

export default ArrayAttribute;