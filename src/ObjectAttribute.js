import React, { Component } from 'react';
//import './LevelObject.css';
import Attribute from './Attribute';
import AttributeCreator from './AttributeCreator';
//import AddKeyValue from './AddKeyValue';

class ObjectAttribute extends Component {

	constructor(props) {
		super(props);
		this.state = {value: this.props.value, editing: true};
		this.createAttribute = this.createAttribute.bind(this);
		this.removeAttribute = this.removeAttribute.bind(this);
		this.toggleEditing = this.toggleEditing.bind(this);
		//this.updateAttribute = this.updateAttribute.bind(this);
	}

	removeAttribute(removeAttrKey) {
		const changedValue = this.state.value
		delete changedValue[removeAttrKey];
		this.setState({value: changedValue})
	}

	toggleEditing() {
		this.setState({ editing: !this.state.editing });
	}

	createAttribute(attrkey, value) {
		const changedValue = this.state.value;
		changedValue[attrkey] = value;
		this.setState({value: changedValue});
	}

	render() {
		var keys = Object.keys( this.props.value ),
			className = this.state.editing ? 'open objectAttr compoundAttr' : 'objectAttr compoundAttr',
		    openHash = '',
		    attrs = [];
		for( var attr in this.props.value ){
			attrs.push(
				<Attribute 
					parentType={Object} 
					value={this.props.value[attr]}
					key={ attr }
					attrkey={ attr }
					removeAttribute={this.removeAttribute}
					createAttribute={this.createAttribute}
					updateAttribute={this.updateAttribute}
				/>
			);
		}

		openHash = (<div className="attrChildren">
			{ attrs }
			<AttributeCreator type="attribute" parent={Object} createAttribute={this.createAttribute} /> 
			</div>);

		return (<span className={className}>
				<span onClick={ this.toggleEditing } className="hashToggle">Object [{keys.length}]</span>
				{openHash}
				</span>
		);
	}
}

export default ObjectAttribute;