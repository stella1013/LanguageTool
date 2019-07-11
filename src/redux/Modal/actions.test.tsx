import * as constants from './constants';
import * as actions from './actions';
import { modalOperations } from '.';

it('returns an action of type `SHOW_MODAL`',()=>{
    const showModal:boolean = false;
    const expectedAction = { type: constants.SHOW_MODAL, payload: showModal};
    expect(modalOperations.showModal(showModal)).toEqual(expectedAction);
});