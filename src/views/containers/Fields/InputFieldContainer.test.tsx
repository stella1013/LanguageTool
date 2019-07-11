import React from 'react';
import { shallow } from 'enzyme';
import InputFieldContainer from './InputFieldContainer';
/*
	* Factory function to create a Shallow Wrapper for the App Component
	* @function setup
	* @param {object} props - component props
	* @param {object} state - initial state
	* @returns {Shallow Wrapper}
	*/ 
	const setup = (props={}, state={})=>{
		const wrapper = shallow(<InputFieldContainer {...props}/>);
		if(state) {
			wrapper.setState(state);
		};
		return wrapper;
	}
describe('Input Field Container', () => {
	//const input = shallow(<InputFieldContainer />);
	const wrapper = setup();
	it('renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
