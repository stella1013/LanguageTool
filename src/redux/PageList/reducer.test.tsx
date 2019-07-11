import { INCREMENT_CURRENT_PAGE, DECREMENT_CURRENT_PAGE } from './constants';
import pageList from './reducer';

describe('page list reducer', ()=>{
    const newPage = 2;
    it('increments page number', ()=>{
        const newState = pageList(undefined, {type: INCREMENT_CURRENT_PAGE, payload: newPage});
        expect(newState.currentPage).toBe(newPage);
    });

    it('decrements page number', ()=>{
        const newState = pageList(undefined, {type: DECREMENT_CURRENT_PAGE, payload: newPage});
        expect(newState.currentPage).toBe(newPage);
    });
})