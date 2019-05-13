import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addSimulation(simulation) {
    try {
        yield axios.post('/api/simulations', simulation.payload);
        const getLatest = { type: 'GET_LATEST_SIMULATION' }
        yield put(getLatest);
    } catch (error) {
        console.log('Error in axios POST:', error);
    }
}

function* getTotalSimulations(action){
    try {
        const response = yield axios.get('/api/simulations/total');
        const total = { type: 'SET_TOTAL_SIMS', payload: response.data};
        yield put(total);
    } catch (error) {
        console.log('Error in axios get', error); 
    }
}

function* getLatestSimulation(action){
    try {
        const response = yield axios.get('/api/simulations');
        const simulation = { type: 'SET_ORDER', payload: response.data }
        yield put(simulation);
    } catch (error) {
        console.log('Error getting sims', error);
    }
}

function* deleteSimulations(action){
    try{
        yield axios.delete('api/simulations');
        const originalOrder = { type: 'ORIGINAL_ORDER' }
        yield put(originalOrder);
        const resetCount = { type: 'RESET_TOTAL_SIMS' }
        yield put(resetCount);
        const resetStats = { type: 'UNSELECTED_STATS' }
        yield put(resetStats);
        const total = { type: 'GET_TOTAL_SIMS' }
        yield put(total);

    } catch (error){
        console.log('Error deleting sims', error)
    }
}

function* finalPlaceSaga() {
    yield takeLatest('ADD_SIMULATION', addSimulation);
    yield takeLatest('GET_LATEST_SIMULATION', getLatestSimulation);
    yield takeLatest('GET_TOTAL_SIMS', getTotalSimulations);
    yield takeLatest('DELETE_SIMS', deleteSimulations);
}

export default finalPlaceSaga;