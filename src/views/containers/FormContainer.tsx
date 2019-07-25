import * as React from 'react';
// import { Row, Col } from 'react-bootstrap';
import CustomInput from './Fields/CustomInput';
import { InputField, DropDown, FileUpload, Header } from '../../redux/types';

interface FormState {
	isReady: boolean;
	validSearch: boolean;
	formValues: Array<InputField | DropDown | FileUpload | Header>;
}

class FormContainer extends React.Component<any, FormState> {
	constructor(props: any) {
		super(props);
		this.state = {
			isReady: false,
			validSearch: false,
			formValues: []
		};
	}

	render() {
		const formElementsArray = [];
		//console.log(this.props.formScaffold);
		
		if (this.props.formScaffold) {
			let key: any;
			for (key in this.props.formScaffold) {
				formElementsArray.push({
					id: key,
					config: this.props.formScaffold[key]
				});
			}
		}
		
		let form: any = null;
		if (formElementsArray.length > 0) {
			form = (
					
						formElementsArray.map((formElement:any) => {
						let elementConfig = formElement.config.elementConfig
							? formElement.config.elementConfig
							: null;
						let selectedValue = formElement.config.selectedValue
						? formElement.config.selectedValue
						: null;
						return (
							<CustomInput
								data-test="form-fields"
								required="true"
								key={formElement.id}
								ident={formElement.id}
							//	options={formElement.config}
								id={formElement.id}
								elementType={formElement.config.elementType}
								size={formElement.config.elementSize}
								elementConfig={elementConfig}
								value={selectedValue.value}
								displayValue={selectedValue.displayValue}
								//postLabel={formElement.config.postLabel}
								changed={
									// this.inputChangedHandler
									(
										event: React.FormEvent<HTMLInputElement>,
										//id: any,
										newVal: any
									) => {
										this.props.inputChangedHandler(
											/*event, formElement.id, */ newVal
										);
									}
								}
							/>
						);
					})
				
			);
		}

		return (
			<div className="row" data-test="component-form">
				{form}
			</div>
		);
	}
}
export default FormContainer;
