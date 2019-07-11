import {APP_TITLE, DefaultActionTypes} from './constants';

function setAppTitleAction(appTitle: string):DefaultActionTypes {
	return {type: APP_TITLE, payload:appTitle};
}

export default {
	setAppTitleAction
}