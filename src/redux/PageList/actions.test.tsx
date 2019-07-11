import * as constants from './constants';
import  pagelistOperations  from './operations';

it('returns an action of type `INCREMENT_CURRENT_PAGE`',()=>{
    const currentPage:number = 2
    const expectedAction = { type: constants.INCREMENT_CURRENT_PAGE, payload: currentPage + 1};
    expect(pagelistOperations.incrementPage(currentPage)).toEqual(expectedAction);
});

it('returns an action of type `DECREMENT_CURRENT_PAGE`',()=>{
    const currentPage:number = 2;
    const expectedAction = { type: constants.INCREMENT_CURRENT_PAGE, payload: currentPage - 1};
    expect(pagelistOperations.decrementPage(currentPage)).toEqual(expectedAction);
});