import { ScreenTypes, CHANGE_MODE } from './constants';
import modeController from './reducer';

describe('mode controller reducer', ()=>{
    const newModeState = ScreenTypes.DASHBOARD_MODE;
    it('shows the modal', ()=>{
        const newState = modeController(undefined, {type: CHANGE_MODE, payload: newModeState});
        expect(newState.currentMode).toBe(newModeState);
    });
})