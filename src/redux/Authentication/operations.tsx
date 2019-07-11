import actions from "./actions";

// This is a link to an action defined in actions.js.
const setAuthStatus = actions.setAuthAction;

const setAuthStart = actions.authStartAction;
const setAuthSuccess = actions.authSuccessAction;
const setAuthFail = actions.authFailAction;
// const auth = actions.authAction;
export default {
    setAuthStatus,
    setAuthStart,
    setAuthSuccess,
    setAuthFail,
    // auth

};