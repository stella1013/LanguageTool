import * as React from 'react';
// import {Col, Row } from 'react-bootstrap';
import SelectFieldContainer from './SelectFieldContainer';
import InputFieldContainer from './InputFieldContainer';
import BSInputFieldContainer from './BSInputFieldContainer';
import BSUploadFieldContainer from './BSUploadFieldContainer';

import UploadFieldContainer from './UploadFieldContainer';
import ColorPickerContainer from './ColorPickerContainer';
import './auth.css';

const CustomInput = (props: any) => {
	let inputElement = null;
	const inputClasses = ['input-element'];
	if (props.invalid && props.shouldValidate) {
		inputClasses.push('Invalid');
	}
	switch (props.elementType) {
		case 'input':
			inputElement = (
				<InputFieldContainer
					className={inputClasses.join(' ')}
					value={props.value}
					changed={props.changed}
					id={props.id}
					placeholder={props.placeholder}
					// showInput={props.elementConfig.showInput}
				/>
			);
			break;
		case 'bs-input':
			inputElement = (
				<BSInputFieldContainer
					className="input-element"
					elementName={props.elementName}
					label={props.elementConfig.label}
					value={props.value}
					changed={props.changed}
					placeholder={props.elementConfig.placeholder}
					type={props.elementConfig.type}
					desc={props.elementConfig.description}
					id={props.id}
					//showInput={props.elementConfig.showInput}
				/>
			);
			break;

		case 'select':
			inputElement = (
				<SelectFieldContainer
					value={props.value}
					displayValue={props.displayValue}
					options={props.elementConfig.options}
					onChange={props.changed}
					id={props.id}
					postLabel={props.postLabel}
				/>
			);
			break;
		case 'file-upload':
			inputElement = (
				<UploadFieldContainer
					value={props.value}
					displayValue={props.displayValue}
					options={props.elementConfig.options}
					onChange={props.changed}
					id={props.id}
					postLabel={props.postLabel}
				/>
			);
			break;
		case 'bs-file-upload':
			inputElement = (
				<BSUploadFieldContainer
					value={props.value}
					displayValue={props.displayValue}
					options={props.elementConfig.options}
					changed={props.changed}
					id={props.id}
					postLabel={props.postLabel}
					type={props.elementConfig.type}
					desc={props.elementConfig.description}
				/>
			);
			break;
		case 'colorpicker':
			inputElement = (
				<ColorPickerContainer
					className="input-element"
					elementName={props.elementName}
					label={props.elementConfig.label}
					value={props.value}
					changed={props.changed}
					placeholder={props.elementConfig.placeholder}
					type={props.elementConfig.type}
					desc={props.elementConfig.description}
					id={props.id}
					//showInput={props.elementConfig.showInput}
				/>
			);
			break;
		case 'heading':
			inputElement = <h3>{props.value}</h3>;
			break;
		default:
			inputElement = (
				<BSUploadFieldContainer
					value={props.value}
					displayValue={props.displayValue}
					options={props.elementConfig.options}
					changed={props.changed}
					id={props.id}
					postLabel={props.postLabel}
					type={props.elementConfig.type}
					desc={props.elementConfig.description}
				/>
			);
	}

	return (
		<div className={props.size}>
			<div className="input">
				<label className="label">{props.label}</label>
				{inputElement}
			</div>
		</div>
	);
};

export default CustomInput;
