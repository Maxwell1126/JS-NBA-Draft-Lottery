import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getStats(action) {
    try {
        const response = yield axios.get('/api/stats');
        const stats = { type: 'SET_STATS', payload: response.data }
        yield put(stats);
    } catch (error) {
        console.log('Error getting stats', error);
    }
}

function* getTopFour(action) {
    try {
        const response = yield axios.get('/api/stats/topFour');
        const topFour = { type: 'SET_TOP_FOUR', payload: response.data }
        yield put(topFour);
    } catch (error) {
        console.log('Error getting topFour', error);
    }
}

function* getStatsSaga() {
    yield takeLatest('GET_STATS', getStats);
    yield takeLatest('GET_TOP_FOUR', getTopFour);
}

export default getStatsSaga;