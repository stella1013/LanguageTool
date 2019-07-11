import modal from './reducer';
import { SHOW_MODAL } from './constants';

describe('modal reducer', ()=>{
    const newModalState = true;
    it('shows the modal', ()=>{
        const newState = modal(undefined, {type: SHOW_MODAL, payload: newModalState});
        expect(newState.showModal).toBe(newModalState);
    });
})