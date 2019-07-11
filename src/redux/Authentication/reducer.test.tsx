import appAuth from './reducer';
import { SET_AUTH_STATUS } from './constants';

describe('appAuth reducer', ()=>{
    const isValid = true;
    it('sets the app authentication', ()=>{
        const newState = appAuth(undefined, {type: SET_AUTH_STATUS, payload: isValid});
        expect(newState.isAuth).toBe(isValid);
    });
})