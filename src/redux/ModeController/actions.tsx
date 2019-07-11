import { ScreenTypes, ModeActionTypes, CHANGE_MODE} from './constants';

const  changeModeAction = (newMode:ScreenTypes):ModeActionTypes =>{
	return ({type: CHANGE_MODE, payload: newMode});
}

export default {
	changeModeAction
};