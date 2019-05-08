import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getStats(action) {
    try {
        const response = yield axios.get('/api/stats');
        const stats = { type: 'SET_STATS', payload: response.data }
        yield put(stats);
    } catch (error) {
        console.log('Error getting classes', error);
    }
}

function* getStatsSaga() {
    yield takeLatest('GET_STATS', getStats);
}

export default getStatsSaga;