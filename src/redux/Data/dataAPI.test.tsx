import  configureMockStore from 'redux-mock-store';
import thunk, {ThunkAction} from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { GET_DATA } from './constants';
import dataOperations  from './operations';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({pages:[]});

const mockResponse = { body: {pages: ['fetched']}};

fetchMock.get('http://localhost:5000/ingestapp', mockResponse);

it('creates an async action to fetch the pages value', ()=>{
    const expectedAction = [{type:GET_DATA, payload: mockResponse.body}];

    return store.dispatch<any>(dataOperations.fetchData())
    .then(()=>{
        expect(store.getActions()).toEqual(expectedAction);
    });
});
