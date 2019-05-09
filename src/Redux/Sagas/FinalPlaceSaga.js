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

function* finalPlaceSaga() {
    yield takeLatest('ADD_SIMULATION', addSimulation);
}

export default finalPlaceSaga;