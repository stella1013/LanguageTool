import dataAPI from './reducer';
import { GET_DATA } from './constants';

describe('dataAPI reducer', ()=>{
    const rawData = {pages:[
        {
            elementName: 'header',
            elementType: 'heading',
            elementSize: 'col-1-of-4',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            selectedValue: { value: 'Brand Colors', displayValue: 'Brand Colors' }
        }]};
    it('fetches and sets data', ()=>{
        expect(dataAPI({}, {type:GET_DATA, payload:rawData})).toEqual(rawData);
    });
})