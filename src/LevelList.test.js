import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LevelList from './LevelList';
import AddKeyValue from './AddKeyValue';
import LevelKeyValue from './LevelKeyValue';

describe(LevelList, () => {
	const component = shallow(<LevelList />);

it('renders and matches our snapshot', () => {
	const component = renderer.create(<LevelList />);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

it('contains an AddKeyValue subcomponent', () => {
	expect(component.find(AddKeyValue)).toHaveLength(1);
});

it('contains the same number of LevelKeyValue components as greetings', () => {
	const LevelKeyValues = component.find(LevelKeyValue).length;
	//const greetings = component.state.greetings.length;
	//expect(LevelKeyValues).toEqual(greetings);
	expect(LevelKeyValues).toEqual(3);



});

it('adds another greeting when the add greeting function is called', () => {
	const before = component.find(LevelKeyValue).length;
	component.instance().addGreeting('Sample');
	const after = component.find(LevelKeyValue).length;
	expect(after).toBeGreaterThan(before);
});

it('removes a greeting from the list when the remove greeting function is called', () => {
	const before = component.find(LevelKeyValue).length;
	const removeMe = component.state('greetings')[0];
	component.instance().removeGreeting(removeMe);
	const after = component.find(LevelKeyValue).length;
	expect(after).toBeLessThan(before);
});

});

