import * as constants from './constants';
import { PageListState } from '../types';

const initialState: PageListState = {
	currentPage: 0
};
function pageList (
	state: PageListState = initialState,
	action: constants.PageListActionTypes
):PageListState {
	switch (action.type) {
	    case constants.INCREMENT_CURRENT_PAGE:
			return {...state, currentPage:action.payload};
		case constants.DECREMENT_CURRENT_PAGE:
				return {...state, currentPage:action.payload};
		default:
			return state;
	}
}
export default pageList;