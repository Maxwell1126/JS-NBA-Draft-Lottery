import { combineReducers } from 'redux';
import draftLotteryOrder from './FinalPlaceReducer.js';
import stats from './statsReducer.js';
const rootReducer = combineReducers({
    draftLotteryOrder,
    stats,
});

export default rootReducer;