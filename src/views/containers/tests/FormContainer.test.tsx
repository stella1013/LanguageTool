import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import { findByTestAttr } from '../../../helpers/testUtils';
import thunk from 'redux-thunk';
import FormContainer from '../FormContainer';



describe('Form Container', () => {
	/*
	 * Factory function to create a Shallow Wrapper for the App Component
	 * @function setup
	 * @param {object} props - component props
	 * @param {object} state - initial state
	 * @returns {Shallow Wrapper}
	 */
    const createMockStore = configureStore([thunk]);
    const initialState = {};
    const store = createMockStore(initialState);
    let wrapper: ShallowWrapper;
	
	describe('rendering', () => {
       //let wrapper: any;
		beforeEach(() => {
            wrapper = shallow(<FormContainer showModal={false}/>);
		});


		it('renders without crashing', () => {
			//const wrapper = setup();
			const formComponent = findByTestAttr(wrapper, 'component-form');
			expect(formComponent.length).toBe(1);
		});
	
		it('render matches snapshot', () => {
			//const wrapper = setup();
			expect(wrapper).toMatchSnapshot();
		});
		it('initial validSearch `state` should be false', () => {
			//const wrapper = setup();
			const validSearchState = wrapper.state('validSearch');
			expect(validSearchState).toBe(false);
		});
		/*
		it('renders form fields', () => {
			//const wrapper = setup();
			const formFields = findByTestAttr(wrapper, 'form-fields');
			expect(formFields.length).toBeGreaterThan(0);
		});
	
	
		it('initial isReady `state` should be set to true', () => {
			//const wrapper = setup();
			const initReadyState = wrapper.state('isReady');
			expect(initReadyState).toBe(true);
		});
		*/
		
	});

	describe('state updates', () => {});
});
