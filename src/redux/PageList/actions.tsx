import { INCREMENT_CURRENT_PAGE, PageListActionTypes} from './constants';

const  incrementCurrentPageAction = (currentPage:number):PageListActionTypes =>{
	return ({type: INCREMENT_CURRENT_PAGE, payload: currentPage + 1});
}
const  decrementCurrentPageAction = (currentPage:number):PageListActionTypes =>{
	return ({type: INCREMENT_CURRENT_PAGE, payload:currentPage - 1 });
}

export default {
	incrementCurrentPageAction,
	decrementCurrentPageAction
};