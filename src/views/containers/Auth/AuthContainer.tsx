import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import { authOperations } from '../../../redux/Authentication';

import CustomInput from '../Fields/CustomInput';
import { Button } from 'react-bootstrap';
import { ValidationRules } from '../../../redux/types';

class AuthContainer extends React.Component<ReduxType> {

	inputChangedHandler = (e: any, controlName:string) => {
		const updatedControls = {...this.props.authform.controls,  [controlName]: {
				...this.props.authform.controls[controlName], 
					value: e.target.value, 
					valid: this.checkValidity(e.target.value, this.props.authform.controls[controlName].validation),
					touched: true
				
			}
		}
		this.setState({controls:updatedControls});
	}
	submitHandler = ( e:any ) => {
		e.preventDefault();
		this.props.setAuthStatus(true);
		// this.props.onAuth(this.props.authform.controls.email, this.props.authform.controls.password);


	}
	checkValidity = (value:string, rules:ValidationRules ) => {
		let isValid = true;
		if(rules.required){
			isValid = value.trim() !== '' && isValid;
		}
		/*
		if(instanceof passwordValidation){
			if(rules.rules.minLength){
				isValid = value.length >= rules.rules.minlength;
			}
		}
		*/
		return isValid;
		
		
	}
	render() {
		const loginformElementsArray = [];

		if (this.props.authform.controls) {
			let key: any;
			for (key in this.props.authform.controls) {
				loginformElementsArray.push({
					id: key,
					config: this.props.authform.controls[key]
				});
			}
		}

		let loginform: any = null;
		if (loginformElementsArray.length > 0) {
			loginform = loginformElementsArray.map((formElement: any) => {
				let elementConfig = formElement.config.elementConfig
					? formElement.config.elementConfig
					: null;
				return (
					<CustomInput
						data-test="form-fields"
						required="true"
						key={formElement.id}
						ident={formElement.id}
						id={formElement.id}
						elementType={formElement.config.elementType}
						size={formElement.config.elementSize}
						elementConfig={elementConfig}
						value={formElement.config.value}
						placeholder={elementConfig.placeholder}
						shouldValidate={formElement.config.validation}
//						displayValue={formElement.config.selectedValue.displayValue}
//						postLabel={formElement.config.postLabel}
						changed={
							(
								event: React.FormEvent<HTMLInputElement>,
								// newVal: any
							) => {
								this.inputChangedHandler(
									event, formElement.id// , newVal
								);
							}
						}
					/>
				);
			});
		}
		return (
			<div data-test="component-auth">
				<form>
				{loginform}
				<p>Forgot your Password?</p>
				<Button onClick={(e:React.MouseEvent)=>this.submitHandler(e)} >Submit</Button>
				</form>
				
			</div>
		);
	}
}


const mapStateToProps = (state:AppState) => {
	return {
		authform:state.authUI
	};
};
const mapDispatchToProps = (dispatch:any) => {
	return {
		//TODO: Swith to onAuth. setAuthStatus() is just for mimicing log in
		setAuthStatus: (isLoggedIn:boolean) => dispatch(authOperations.setAuthStatus(isLoggedIn))
//		onAuth: (email:string, password:string) => dispatch(authOperations.auth(email, password))
	};
};
type ReduxType = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthContainer);
