import authUIReset from './reducer';
import { SET_PASSWORD_FIELDS } from './constants';

describe('authUI reducer', ()=>{
    const data = 'mail@mail.com';
    it('sets the login fields for authentication', ()=>{
        const newState = authUIReset(undefined, {type: SET_PASSWORD_FIELDS, payload: data});
		expect(newState.controls.password.value).toBe(data);
		// expect(newState.controls.passwordconfirm.value).toBe(data.passwordconfirm);
    });
})