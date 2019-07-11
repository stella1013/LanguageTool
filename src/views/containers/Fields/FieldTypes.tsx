
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