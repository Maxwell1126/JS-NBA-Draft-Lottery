import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addSimulation(simulation) {
    try {
        yield axios.post('/api/simulations', simulation.payload);
        const getSimulations = { type: 'GET_SIMULATIONS' }
        yield put(getSimulations);
    } catch (error) {
        console.log('Error in axios POST:', error);
    }
}

function* getLatestSimulation(action){
    try {
        const response = yield axios.get('/api/simulations');
        const simulation = { type: 'SET_ORDER', payload: response.data }
        yield put(simulation);
    } catch (error) {
        console.log('Error getting classes', error);
    }
}

function* finalPlaceSaga() {
    yield takeLatest('ADD_SIMULATION', addSimulation);
    yield takeLatest('GET_LATEST_SIMULATION', getLatestSimulation);
}

export default finalPlaceSaga;