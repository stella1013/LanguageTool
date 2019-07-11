import * as constants from './constants';
import * as actions from './actions';
import authOperations  from './operations';

describe('Authorization', ()=>{
    it('creates an action that sets isAuth value',()=>{
        const data = true;
        const expectedAction = { type: constants.SET_AUTH_STATUS, payload:data};
        expect(authOperations.setAuthStatus(data)).toEqual(expectedAction);
    });
    it('creates an action that begins authorizing',()=>{
        const data = true;
        const expectedAction = { type: constants.AUTH_START, payload:data};
        expect(authOperations.setAuthStart(data)).toEqual(expectedAction);
    });
    it('creates an action that sets auth succes',()=>{
        const data = true;
        const expectedAction = { type: constants.AUTH_SUCCESS, payload:data};
        expect(authOperations.setAuthSuccess(data)).toEqual(expectedAction);
    });
    it('creates an action that sets auth failure',()=>{
        const data = true;
        const expectedAction = { type: constants.AUTH_FAIL, payload:data};
        expect(authOperations.setAuthFail(data)).toEqual(expectedAction);
    });
});
