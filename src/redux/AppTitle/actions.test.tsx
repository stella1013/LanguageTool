import * as constants from './constants';
import * as actions from './actions';
import appTitleOperations  from './operations';

it('creates an action that sets the form fields',()=>{
    const data = 'Some string';
    const expectedAction = { type: constants.APP_TITLE, payload:data};
    expect(appTitleOperations.setAppTitle(data)).toEqual(expectedAction);
});