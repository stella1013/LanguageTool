import { AuthActionTypes, SET_AUTH_STATUS, AUTH_START, AUTH_FAIL, AUTH_SUCCESS } from "./constants";

function setAuthAction(isValid:boolean):AuthActionTypes {
	return {type: SET_AUTH_STATUS, payload:isValid};
}
function authStartAction(isValid:boolean):AuthActionTypes {
	return {type: AUTH_START, payload:isValid};
}
function authSuccessAction(isValid:boolean):AuthActionTypes {
	return {type: AUTH_SUCCESS, payload:isValid};
}
function authFailAction(isValid:boolean):AuthActionTypes {
	return {type: AUTH_FAIL, payload:isValid};
}
/*
function authAction(credentials:{email:string, password:string}):AuthActionTypes {
	return dispatch({type: AUTH_START, payload:credentials});
}
*/

export default {
	setAuthAction,
	authStartAction,
	authSuccessAction,
	authFailAction,
	// authAction


}