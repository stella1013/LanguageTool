import * as constants from './constants';
import { AuthState } from '../types';

const initialState: AuthState = {
	controls: {
		email: {
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
		password: {
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

const authUI = (
	state = initialState,
	action: constants.AuthUIActionTypes
): AuthState => {
	switch (action.type) {
		case constants.SET_LOGIN_FIELDS:
			return {
				...state,
				controls: {
					...state.controls,
					email: {
						...state.controls.email,
						value: action.payload.email
					},
					password: {
						...state.controls.password,
						value: action.payload.password
					}
				}
			};
		default:
			return state;
	}
};
export default authUI;
