//import { ConnectedRouter } from 'connected-react-router';
//import React from 'react';
//import { Provider } from 'react-redux';
////import { mergeDeepRight } from 'ramda';
//import rootReducer from '../redux/reducers';
////import  createStoreWithMiddleWare  from '../redux/store';
//import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
//import { AppState } from '../redux/store';
//import ReduxThunk  from 'redux-thunk';
//import { createStore, applyMiddleware } from 'redux';
//import rootReducer from '../redux/reducers';
//import thunk from 'redux-thunk';

/*
	* Returns Shallow Wrapper containing node(s) with the given data-test value
	* @param {Shallow Wrapper} - Enzyme shallow wrapper to search within
	* @param {string} val - Value of data-test attribute for search.
	* @returns {Shallow Wrapper}
	*/ 
	export const findByTestAttr = (wrapper:any, val:string) => {
		return wrapper.find(`[data-test="${val}"]`);
	}

	export const storeFactory = (initialState:any) =>{
		const createMockStore = configureMockStore();
		return createMockStore(initialState);
	}
	/*
	export const makeMountRender = (Component:any, defaultProps = {}) => {
		return (customProps = {}) => {
		  const props = {
			...defaultProps,
			...customProps
		  };
		  return mount(<Component {...props} />);
		};
	  };

	  export const makeStore = (customState = {}) => {
		const root = rootReducer({}, { type: '@@INIT' });
		const state = mergeDeepRight(root, customState);
		return createStoreWithMiddleWare(rootReducer, state);
	  };
	  export const snapshotify = (reactWrapper:any) => {
		return reactWrapper.html();
	  };

	  export const reduxify = (Component, props = {}, state = {}) => {
		return function reduxWrap() {
		  return (
			<Provider store={makeStore(state)}>
			  <ConnectedRouter history={history}>
				<Component {...props} />
			  </ConnectedRouter>
			</Provider>
		  );
		}
	  };

*/