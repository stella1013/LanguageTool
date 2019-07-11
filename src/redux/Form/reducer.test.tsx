import formFields from './reducer';
import { SET_FORM_FIELDS } from './constants';

describe('Form Fields reducer', ()=>{
    const newFormFieldState = {
        pages:[
            {
                page: [
                    {
                        elementName: 'header',
                        elementType: 'heading',
                        elementSize: 'col-1-of-4',
                        elementConfig: {
                            type: 'text',
                            placeholder: ''
                        },
                        selectedValue: { value: 'Brand Colors', displayValue: 'Brand Colors' }
                    }
                ]
            }
        ]
    }
    it('generates the form Fields', ()=>{
        const newState = formFields(undefined, {type: SET_FORM_FIELDS, payload: newFormFieldState});
        expect(newState).toBe(newFormFieldState);
    });
})