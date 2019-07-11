import * as constants from './constants';
import { progressBarOperations } from '.';

it('returns an action of type `SET_PROGRESS_BAR_STATUS`',()=>{
    const status:number = 5;
    const expectedAction = { type: constants.SET_PROGRESS_BAR_STATUS, payload: status};
    expect(progressBarOperations.updateProgressBar(status)).toEqual(expectedAction);
});