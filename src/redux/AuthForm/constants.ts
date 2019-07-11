import { SubmittedData } from "../types";

export const SET_LOGIN_FIELDS = 'SET_AUTH_STATUS';

interface setLoginFieldsAction {
    type: typeof SET_LOGIN_FIELDS;
    payload:SubmittedData;
};


export type AuthUIActionTypes = setLoginFieldsAction;