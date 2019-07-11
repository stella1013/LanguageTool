import * as constants from './constants';
import { FormState } from '../types';

const initialState: FormState= {
	pages: undefined
}
function dataAPI(
	state: FormState = initialState,
	action: constants.DefaultActionTypes
): FormState {
    switch(action.type) {
        case constants.GET_DATA:
            return action.payload;
        default:
            return state;
    }
}
export default dataAPI;