export const SET_FORM_FIELDS = 'SET_FORM_FIELDS';

interface setFormFieldsAction {
    type: typeof SET_FORM_FIELDS;
    payload:{};
};

export type FormFieldActionTypes = setFormFieldsAction;