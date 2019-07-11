import * as constants from './constants';

const formFields = (state = {}, action: constants.FormFieldActionTypes) => {
	switch (action.type) {
		case constants.SET_FORM_FIELDS:
			return action.payload;
		default:
			return state;
	}
};
export default formFields;
