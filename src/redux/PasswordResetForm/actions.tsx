import { SUBMIT_NEW_PASSWORD_START, SUBMIT_NEW_PASSWORD_SUCCESS, SUBMIT_NEW_PASSWORD_FAIL, PasswordResetActionTypes, SET_PASSWORD_FIELDS,  } from "./constants";

function setPasswordResetFieldsAction(newPassword:string):PasswordResetActionTypes {
	return {type: SET_PASSWORD_FIELDS, payload:newPassword};
}

function submitNewPasswordStartAction(newPassword:string):PasswordResetActionTypes {
	return {type: SUBMIT_NEW_PASSWORD_START, payload:newPassword};
}
function submitNewPasswordSuccessAction(newPassword:string):PasswordResetActionTypes {
	return {type: SUBMIT_NEW_PASSWORD_SUCCESS, payload:newPassword};
}
function submitNewPasswordFailAction(newPassword:string):PasswordResetActionTypes {
	return {type: SUBMIT_NEW_PASSWORD_FAIL, payload:newPassword};
}
export default {
	setPasswordResetFieldsAction,
	submitNewPasswordStartAction,
	submitNewPasswordSuccessAction,
	submitNewPasswordFailAction
}