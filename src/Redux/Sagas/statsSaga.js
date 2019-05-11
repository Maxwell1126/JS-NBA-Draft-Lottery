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
        console.log('in get top four');
        
        const response = yield axios.get('/api/stats/topFour');
        const topFour = { type: 'SET_TOP_FOUR', payload: response.data }
        yield put(topFour);
    } catch (error) {
        console.log('Error getting topFour', error);
    }
}

function* getPlaces(action){
    try {
        const response = yield axios.post('/api/stats/places', action.payload);
        const setPlaces = { type: 'SET_PLACES', payload: response.data }
        yield put(setPlaces);
    } catch (error) {
        console.log('Error in axios POST:', error);
    }
}

function* getMode(action) {
    try {
        const response = yield axios.get('/api/stats/mode');
        const teamMode = { type: 'SET_MODE', payload: response.data }
        yield put(teamMode);
    } catch (error) {
        console.log('Error getting getMode', error);
    }
}

function* getStatsSaga() {
    yield takeLatest('GET_STATS', getStats);
    yield takeLatest('GET_TOP_FOUR', getTopFour);
    yield takeLatest('GET_PLACES', getPlaces);
    yield takeLatest('GET_MODE', getMode);
}

export default getStatsSaga;