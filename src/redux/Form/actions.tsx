import {SET_FORM_FIELDS, FormFieldActionTypes} from './constants';

const setFormFieldsAction = (data:any):FormFieldActionTypes =>{
    return {type:SET_FORM_FIELDS, payload:data };
}

export default {
	setFormFieldsAction
};