import * as constants from './constants';
import { ResetAuthState } from '../types';

const initialState: ResetAuthState = {
	controls: {
		password: {
			elementType: 'input',
			elementConfig: {
				type: 'email',
				placeholder: 'Email Address'
			},
			value: '',
			validation: {
				required: true,
				isEmail: true
			},
			valid: false,
			touched: false
		},
		passwordconfirm: {
			elementType: 'input',
			elementConfig: {
				type: 'password',
				placeholder: 'Password'
			},
			value: '',
			validation: {
				required: true,
				minLength: 6
			},
			valid: false,
			touched: false
		}
	}
};

const authUIReset = (
	state = initialState,
	action: constants.PasswordResetActionTypes
): ResetAuthState => {
	switch (action.type) {
		case constants.SET_PASSWORD_FIELDS:
			return {
				...state,
				controls: {
					...state.controls,
					password: {
						...state.controls.password,
						value: action.payload
					}
				}
			};
		default:
			return state;
	}
};
export default authUIReset;
