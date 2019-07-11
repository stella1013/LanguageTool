import * as constants from './constants';
import { AppTitleState } from '../types';

const initialState: AppTitleState = {
	appTitle: ''
};

const appTitle = (
	state = initialState,
	action: constants.DefaultActionTypes
):AppTitleState => {
	switch (action.type) {
		case constants.APP_TITLE:
			return {...state, appTitle:action.payload};
		default:
			return state;
	}
};
export default appTitle;
