export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

interface setAuthStatusAction {
    type: typeof SET_AUTH_STATUS;
    payload:boolean;
};

interface authStartAction {
    type: typeof AUTH_START;
    payload:boolean;
};


interface authSuccessAction {
    type: typeof AUTH_SUCCESS;
    payload:boolean;
};

interface authFailAction {
    type: typeof AUTH_FAIL;
    payload:boolean;
};


export type AuthActionTypes = setAuthStatusAction | authStartAction | authSuccessAction | authFailAction;