import { all } from 'redux-saga/effects';
import getStatsSaga from './statsSaga';
import finalPlaceSaga from './FinalPlaceSaga';
export default function* rootSaga() {
    yield all([
        getStatsSaga(),
        finalPlaceSaga(),
    ]);
}