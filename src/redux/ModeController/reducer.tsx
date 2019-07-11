import * as constants from './constants';
import { ModeState } from '../types';

const initialState: ModeState = {
	currentMode: constants.ScreenTypes.DASHBOARD_MODE
};
function modeController (
	state: ModeState = initialState,
	action: constants.ModeActionTypes
):ModeState {
	switch (action.type) {
	    case constants.CHANGE_MODE:
		    return {...state, currentMode:action.payload};
		default:
			return state;
	}
}
export default modeController;