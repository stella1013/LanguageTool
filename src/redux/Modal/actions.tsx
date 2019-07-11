import {SHOW_MODAL, ModalActionTypes, HIDE_MODAL} from './constants';

const  showModal = (showModal: boolean):ModalActionTypes =>{
	return ({type: SHOW_MODAL, payload: showModal});
}
const hideModal = ( distance:any ) => ( {
    type: HIDE_MODAL,
    payload: {
        distance
    }
} );

export default {
	showModal,
	hideModal
};