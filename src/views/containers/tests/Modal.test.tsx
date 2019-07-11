import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import configureMockStore from 'redux-mock-store';
import { findByTestAttr } from '../../../helpers/testUtils';
import thunk from 'redux-thunk';
import ModalContainer from '../ModalContainer';
import { Provider } from 'react-redux';



describe('Modal', () => {
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
			wrapper = shallow(<Provider store={store}><ModalContainer  /></Provider>)
			
		});

		it('renders without crashing', () => {
			const component = findByTestAttr(wrapper, 'component-modal');
			expect(component).toBeTruthy();
		});

		it('render matches snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});

		
	});

	describe('state updates', () => {});
});
