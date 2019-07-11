import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import configureMockStore from 'redux-mock-store';
import { findByTestAttr } from '../../../helpers/testUtils';
import thunk from 'redux-thunk';
import PageListContainer from '../PageListContainer';
import { Provider } from 'react-redux';

describe('Page List', () => {
	/*
	 * Factory function to create a Shallow Wrapper for the App Component
	 * @function setup
	 * @param {object} props - component props
	 * @param {object} state - initial state
	 * @returns {Shallow Wrapper}
	 */
	const createMockStore = configureMockStore([thunk]);
	const initialState = {};
	
	let wrapper: any;
	describe('rendering', () => {
		let props = {
			appTitle: 'title'
		};
		beforeEach(() => {
			const store = createMockStore(initialState);
			wrapper = shallow(
				<Provider store={store}>
					<PageListContainer />
				</Provider>
			);
		});
		it('renders without crashing', () => {
			const component = findByTestAttr(wrapper, 'component-pagelist');
			expect(component).toBeTruthy();
		});

		it('render matches snapshot', () => {
			expect(wrapper).toMatchSnapshot();
		});
	
	});

	describe('state updates', () => {
		describe('when navigating pages', () => {
			/*
			it('next button it navigates to the next page', () => {
				const currentPage = 1;
				const component = findByTestAttr(wrapper, 'component-pagenav');
				expect(currentPage).toBe(2);
			});
			it('back button it navigates to the previous page', () => {
				const currentPage = 2;
				const component = findByTestAttr(wrapper, 'component-pagenav');
				expect(currentPage).toBe(1);
			});
			it('initial `state` of current page at 1', () => {
				expect(wrapper.state('currentPage')).toEqual(1);
			});
			it('renders navigation component', () => {
				const component = findByTestAttr(wrapper, 'component-pagenav');
				expect(component.length).toBe(1);
			});
			*/
		});
	});
});
