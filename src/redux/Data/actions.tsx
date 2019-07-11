import { ThunkAction } from 'redux-thunk';
import { GET_DATA, DefaultActionTypes } from './constants';
import { AnyAction } from 'redux';

let fetchData = (): ThunkAction<Promise<DefaultActionTypes>,{},{},AnyAction> => 
	(dispatch: any): any => {
		return fetch('http://localhost:5000/ingestapp')
			.then(response => response.json())
			.then(json => dispatch({ type: GET_DATA, payload: json }))
			.catch(error => console.log(error));
	};

export default {
	fetchData
};
/* Later refactoring idea
const unsplashClient = new Unsplash({
  applicationId:
    "id",
  secret: "secret",
  callbackUrl: "callback"
});

export const fetchingPhotos = payload => ({
  type: FETCHING_PHOTOS, payload
});

export const setPhotos = payload => ({
  type: SET_PHOTOS, payload
});

export const fetchPhotos = term => dispatch => {
  dispatch(fetchingPhotos(true));
  return unsplashClient.search
    .photos(term, 1, 20)
    .then(toJson)
    .then(json => {
      dispatch(setPhotos(json));
      dispatch(fetchingPhotos(false));
    });
}
*/