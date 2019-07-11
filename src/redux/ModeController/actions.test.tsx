import * as constants from './constants';
import  modeOperations  from './operations';

it('returns an action of type `CHANGE_MODE`',()=>{
    const newMode:constants.ScreenTypes = constants.ScreenTypes.DASHBOARD_MODE;
    const expectedAction = { type: constants.CHANGE_MODE, payload: newMode};
    expect(modeOperations.changeMode(newMode)).toEqual(expectedAction);
});