export const SET_PASSWORD_FIELDS = 'SET_PASSWORD_FIELDS';
export const SUBMIT_NEW_PASSWORD_START = 'SUBMIT_NEW_PASSWORD';
export const SUBMIT_NEW_PASSWORD_SUCCESS = 'SUBMIT_NEW_PASSWORD';
export const SUBMIT_NEW_PASSWORD_FAIL = 'SUBMIT_NEW_PASSWORD';

interface setPasswordResetFieldsAction {
    type: typeof SET_PASSWORD_FIELDS;
    payload:string;
};
interface submitNewPasswordStartAction {
    type: typeof SUBMIT_NEW_PASSWORD_START;
    payload:string;
};
interface submitNewPasswordSuccessAction {
    type: typeof SUBMIT_NEW_PASSWORD_SUCCESS;
    payload:string;
};
interface submitNewPasswordFailAction {
    type: typeof SUBMIT_NEW_PASSWORD_FAIL;
    payload:string;
};

export type PasswordResetActionTypes = setPasswordResetFieldsAction | submitNewPasswordStartAction | submitNewPasswordSuccessAction | submitNewPasswordFailAction;