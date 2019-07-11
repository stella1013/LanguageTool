import * as constants from './constants';
import * as actions from './actions';
import passwordResetUIOperations  from './operations';

describe('Password Fields UI', ()=>{
    it('creates an action that sets the login fields value',()=>{
        const data = {controls:{
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
            },
            passwordconfirm: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Confirm Password'
                },
                value: 'some password',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
        };
        const expectedAction = { type: constants.SET_PASSWORD_FIELDS, payload:data};
        expect(passwordResetUIOperations.setPasswordResetFields(data)).toEqual(expectedAction);
    });
});
