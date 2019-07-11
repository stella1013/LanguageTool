import * as constants from './constants';
import { ModalState } from '../types';

const initialState: ModalState = {
	showModal: false
};
function modal (
	state: ModalState = initialState,
	action: constants.ModalActionTypes
):ModalState {
	switch (action.type) {
	    case constants.SHOW_MODAL:
		    return {...state, showModal:action.payload};
		default:
			return state;
	}
}
export default modal;