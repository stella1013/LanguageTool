import { ScreenTypes } from './ModeController/constants';

export interface GlobalState {
    appTitle: string;
    isReady:boolean;
	showModal:boolean;
	progress:number;
	currentPage:number;
	totalPages:number;
	pages:Page[];
	brandColors:string[];
}
export interface AppAuthState {
    isAuth: boolean;
}
export interface AppTitleState {
    appTitle: string;
}

export interface ModalState {
    showModal: boolean;
}
export interface ModeState {
    currentMode: ScreenTypes;
}
export interface PageListState {
    currentPage: number;
}

export interface FormState {
	pages:Pages | undefined;
}
export interface DataResponse {
	
}
export interface Pages {
	pages:Array<Page>
}
export interface Page {
	page:Array<InputField | DropDown | FileUpload | Header>;
}
export interface InputField {
	elementName: string;
	elementType: string;
	elementSize: string;
	elementConfig: {
		type: string;
		placeholder: string;
		showInput:boolean;
	};
	selectedValue: {
		value: string;
		displayValue: string;
	};
	
}
export interface DropDown {
	elementType: string;
	elementSize: string;
	elementConfig: {
		options: {
			value: string;
			displayValue: string;
		}[];
		postLabel: string;
	};
	selectedValue: {
		value: string;
		displayValue: string;
	};
}
export interface FileUpload {
	elementName:string;
	elementType: string;
	elementSize: string;
	elementConfig: {
		fileType:Array<String>;
	};
	selectedValue: {
		value: string;
		displayValue: string;
	};
	
}
export interface  Header {
	elementName:string;
	elementType: string;
	elementSize: string;
	elementConfig: {
		fileType:Array<String>;
	};
	selectedValue: {
		value: string;
		displayValue: string;
	};
}

export interface elementConfigShape {
	type: string;
	placeholder: string;
}
export interface emailValidation {
	required: boolean;
	isEmail: boolean;
}
export interface passwordValidation {
	required: boolean;
	minLength: number;
}

export interface ValidationRules {
	[index: string]: emailValidation | passwordValidation;
}
export interface fieldShape {
	elementType: string;
	elementConfig: elementConfigShape;
	value: string;
	validation: passwordValidation | emailValidation;
	valid: boolean;
	touched: boolean;
}
export interface loginfieldShape {
	elementType: string;
	elementConfig: elementConfigShape;
	value: string;
	validation: passwordValidation | emailValidation;
	valid: boolean;
	touched: boolean;
}
export interface SubmittedData {
	email:string;
	password:string;
}
export interface controlShape {
	[index: string]: any;
	email: fieldShape;
	password: fieldShape;
}
export interface controlShapeResetPassword {
	[index: string]: any;
	password: fieldShape;
	passwordconfirm: fieldShape;
}
export interface AuthState {
	controls: controlShape;
}
export interface ResetAuthState {
	controls: controlShapeResetPassword;
}
