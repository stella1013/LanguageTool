import * as constants from './constants';
import * as actions from './actions';

it('returns an action of type `SHOW_MODAL`',()=>{
    const formFields = {
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
    const expectedAction = { type: constants.SET_FORM_FIELDS, payload: formFields};
    expect(actions.setFormFieldsAction(formFields)).toEqual(expectedAction);
});