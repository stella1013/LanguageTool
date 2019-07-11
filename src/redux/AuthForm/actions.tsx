import { AuthUIActionTypes, SET_LOGIN_FIELDS,  } from "./constants";
import { SubmittedData } from "../types";

function setLoginFieldsAction(cred:SubmittedData):AuthUIActionTypes {
	return {type: SET_LOGIN_FIELDS, payload:cred};
}


export default {
	setLoginFieldsAction
	// authAction


}