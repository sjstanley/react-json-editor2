import React, { Component } from 'react';
import './LevelList.css';
import LevelKeyValue from './LevelKeyValue';
import AddKeyValue from './AddKeyValue';

class LevelList extends Component {

	constructor(props) {
		super(props);
		this.state = {listObject: this.props.listObject};
		this.addKeyValue = this.addKeyValue.bind(this);
		this.removeKeyValue = this.removeKeyValue.bind(this);
		this.updateKeyValue = this.updateKeyValue.bind(this);
	}


	renderKeyValuePairs() {
		if (this.state.listObject) {
			return this.state.listObject.map((value, index) => (
				<LevelKeyValue 
					key={index} 
					index={index}
					value={value}
					removeKeyValue={this.removeKeyValue}
					updateKeyValue={this.updateKeyValue}
				/>
			));
		}	
	}

	addKeyValue(newValue) {
		if (newValue === '') {
			newValue = null;
		}
		this.setState({listObject: [...this.state.listObject, newValue] });
	}
	removeKeyValue(removeIndex, removeValue){
		// const filteredKeyValuePairs = this.state.listObject.filter(value => {
		// 	return value !== removeValue;});
		const filteredKeyValuePairs = this.state.listObject
		filteredKeyValuePairs.splice(removeIndex, 1);
		this.setState({ listObject: filteredKeyValuePairs });
	}
	updateKeyValue(updateIndex, changedValue) {
		const changedKeyValuePairs = this.state.listObject 
	
		changedKeyValuePairs[updateIndex] = changedValue;
		this.setState({listObject: changedKeyValuePairs});
	}
	

	render() {
		return (

			<div className="LevelList compoundAttr">
				<pre>list: </pre>
				<pre>{JSON.stringify(this.state.listObject, null, '  ')}</pre>
				{this.renderKeyValuePairs()}
				<AddKeyValue 
					addKeyValue={this.addKeyValue}
				 />
			</div>
		);
	}
}

export default LevelList;