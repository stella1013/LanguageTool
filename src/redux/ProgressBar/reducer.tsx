import * as constants from './constants';

const progressBar = (state = 25, action: constants.ProgressBarActionTypes) => {
	switch (action.type) {
		case constants.SET_PROGRESS_BAR_STATUS:
			return action.payload;
		default:
			return state;
	}
};
export default progressBar;
