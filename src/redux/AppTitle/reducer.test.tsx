import appTitle from './reducer';
import { APP_TITLE } from './constants';

describe('appTitle reducer', ()=>{
    const newTitle = 'some string';
    it('sets the app title', ()=>{
        const newState = appTitle(undefined, {type: APP_TITLE, payload: newTitle});
        expect(newState.appTitle).toBe(newTitle);
    });
})