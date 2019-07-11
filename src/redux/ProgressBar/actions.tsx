import {SET_PROGRESS_BAR_STATUS, ProgressBarActionTypes} from './constants';

function setProgressBarStatusAction(status: number):ProgressBarActionTypes {
	return {type: SET_PROGRESS_BAR_STATUS, payload:status};
}
export default {
	setProgressBarStatusAction
}