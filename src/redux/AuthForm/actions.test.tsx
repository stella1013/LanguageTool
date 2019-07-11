import * as constants from './constants';
import * as actions from './actions';
import authUIOperations  from './operations';

describe('Login UI', ()=>{
    it('creates an action that sets the login fields value',()=>{
        const data = {controls:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: 'mail@mail.com',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: 'some password',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }}
        };
        const expectedAction = { type: constants.SET_LOGIN_FIELDS, payload:data};
        expect(authUIOperations.setLoginFields(data)).toEqual(expectedAction);
    });
});
