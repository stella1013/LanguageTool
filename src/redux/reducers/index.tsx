import dataReducer from '../Data/reducer';
import appTitleReducer from '../AppTitle/reducer';
import modalReducer from '../Modal/reducer';
import progressBarReducer from '../ProgressBar/reducer';
import modeControllerReducer from '../ModeController/reducer';
import pageListReducer from '../PageList/reducer';
import appAuthReducer from '../Authentication/reducer';
import authUIReducer from '../AuthForm/reducer';
import { combineReducers } from 'redux';
export default combineReducers({
    
    data:dataReducer,
    authUI:authUIReducer,
    modal:modalReducer,
    progressBar:progressBarReducer,
    appTitle:appTitleReducer,
    modeController:modeControllerReducer,
    pagelist:pageListReducer,
    appAuth: appAuthReducer
});