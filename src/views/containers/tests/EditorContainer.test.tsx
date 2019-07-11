import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import configureMockStore from 'redux-mock-store';
import { findByTestAttr } from '../../../helpers/testUtils';
import thunk from 'redux-thunk';
import EditorContainer from '../EditorContainer';
import { Provider } from 'react-redux';

describe('Editor', () => {
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
			wrapper = shallow(<Provider store={store}><EditorContainer  /></Provider>)
			
		});

		it('renders without crashing', () => {
			const component = findByTestAttr(wrapper, 'component-editor');
			expect(component).toBeTruthy();
		});

		it('render matches snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
		it('renders AppTitle', () => {
			const appTitle = findByTestAttr(wrapper, 'apptitle');
			expect(appTitle).toBeTruthy();
		});
		/*
		it('renders modal Toggle button', () => {
			const modalButton = findByTestAttr(wrapper, 'modaltoggle-button');
			expect(modalButton.length).toBe(1);
		});

		it('renders Modal', () => {
			const modal = findByTestAttr(wrapper, 'modalDisplay');
			expect(modal.length).toBe(1);
		});
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
