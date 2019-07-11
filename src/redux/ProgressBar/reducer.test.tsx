import progressBar from './reducer';
import { GET_PROGRESS_BAR_STATUS, SET_PROGRESS_BAR_STATUS } from './constants';

describe('progress bar reducer', ()=>{
    const newProgressBarState = 5;
 
    it('sets progress bar status', ()=>{
        const newState = progressBar(undefined, {type: SET_PROGRESS_BAR_STATUS, payload: newProgressBarState});
        expect(newState).toBe(newProgressBarState);
    });
})