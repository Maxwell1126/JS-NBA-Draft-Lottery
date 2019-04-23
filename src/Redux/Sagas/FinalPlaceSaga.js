import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserRequests(action) {
    try {
        const serverResponse = yield axios.get(``);
        const nextAction = {
            type: 'SET_ORDER',
            payload: serverResponse.data
        }
        yield put(nextAction);
    } catch (error) {
        console.log('Error in axios GET:', error);
    }
}

function* finalPlaceSaga() {
    yield takeLatest('FETCH_USER_REQUESTS', fetchOrder);
}

export default finalPlaceSaga;