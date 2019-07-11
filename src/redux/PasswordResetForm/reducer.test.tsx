import authUI from './reducer';
import { SET_LOGIN_FIELDS } from './constants';

describe('authUI reducer', ()=>{
    const data = {email:'mail@mail.com', password:'some password'};
    it('sets the login fields for authentication', ()=>{
        const newState = authUI(undefined, {type: SET_LOGIN_FIELDS, payload: data});
		expect(newState.controls.email.value).toBe(data.email);
		expect(newState.controls.password.value).toBe(data.password);
    });
})