
import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../../../helpers/testUtils';
import App from '../App';
import DashBoardContainer from '../DashboardContainer';

describe('App', () => {
	/*
	 * Factory function to create a Shallow Wrapper for the App Component
	 * @function setup
	 * @param {object} props - component props
	 * @param {object} state - initial state
	 * @returns {Shallow Wrapper}
	 */

	const createMockStore = configureMockStore([thunk]);
	const initialState = {};
	//const store = createMockStore(initialState);
	let wrapper: any;
	describe('rendering', () => {
		//const mockFetchData = jest.fn();
		//const props = {  }
		beforeEach(() => {
			const store = createMockStore(initialState);
			wrapper = shallow(<Provider store={store}><App /></Provider>);
				
		});
		

		it('renders without crashing', () => {
			const appComponent = findByTestAttr(wrapper, 'component-app');
			expect(appComponent).toBeTruthy();
		});

		it('render matches snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
		
		describe('rendering different screens', () => {
			
			it('initial load renders DashBoard Mode', () => {
				expect(wrapper.find(<DashBoardContainer />)).toBeTruthy();
			});
		});

	});

	describe('when user updates `state`', () => { 
		
	});
});

