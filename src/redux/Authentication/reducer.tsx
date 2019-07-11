import * as constants from './constants';
import { AppAuthState } from '../types';

const initialState: AppAuthState = {
	isAuth: false
};

const appAuth = (
	state = initialState,
	action: constants.AuthActionTypes
):AppAuthState => {
	switch (action.type) {
		case constants.SET_AUTH_STATUS:
			return {...state, isAuth:action.payload};
		default:
			return state;
	}
};
export default appAuth;
