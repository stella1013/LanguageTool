import * as React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../helpers/testUtils';
import DashboardContainer from '../DashboardContainer';
/**
 * Workaround for Enzyme 3.9.0 not working with React-Redux hooks-based connect()
 */

describe('Dashboard', () => {
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
		let props ={
			appTitle:'title'
		}
		beforeEach(() => {
			const store = createMockStore(initialState);
			wrapper = shallow(<Provider store={store}><DashboardContainer  /></Provider>)
			
		});

		it('renders without crashing', () => {
			const component = findByTestAttr(wrapper, 'component-dashboard');
			expect(component).toBeTruthy();
		});

		it('render matches snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
		it('renders AppTitle', () => {
			const appTitle = findByTestAttr(wrapper, 'apptitle');
			expect(appTitle).toBeTruthy();
		});
		it('renders modal Toggle button', () => {
			const modalButton = findByTestAttr(wrapper, 'modaltoggle-button');
			expect(modalButton).toBeTruthy();
		});

		it('renders Modal', () => {
			const modal = findByTestAttr(wrapper, 'modalDisplay');
			expect(modal).toBeTruthy();
		});
		/*
		it('clicking display specs button will show Modal', () => {
			//find button and click
			const modalButton = findByTestAttr(wrapper, 'modaltoggle-button');
			modalButton.simulate('click');
			wrapper.update();
			//find modalstate and test value
			const initModalState = wrapper.state('showModal');
			expect(initModalState).toBe(true);
		});
		*/
	});
});
