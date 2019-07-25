import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import {formReducer} from './reducers/formReducer';
//import {globalStateReducer} from './reducers/globalStateReducer';
//import { GlobalState, FormState } from './types';


export type AppState = ReturnType<typeof rootReducer>
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

export default store;
