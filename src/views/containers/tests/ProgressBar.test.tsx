import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import { findByTestAttr } from '../../../helpers/testUtils';
import thunk from 'redux-thunk';
import ProgressBarContainer from '../ProgressBarContainer';



describe('Progress Bar Container', () => {
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
            wrapper = shallow(<ProgressBarContainer now={0}/>);
		});

		it('renders without crashing', () => {
			const component = findByTestAttr(wrapper, 'component-progressbar');
			expect(component.length).toBe(1);
		});

		it('render matches snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});

		
	});

	describe('state updates', () => {});
});
