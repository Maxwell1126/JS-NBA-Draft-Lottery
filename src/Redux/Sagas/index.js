import { all } from 'redux-saga/effects';
import getStatsSaga from './statsSaga'
export default function* rootSaga() {
    yield all([
        getStatsSaga(),
    ]);
}