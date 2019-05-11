import { combineReducers } from 'redux';
import draftLotteryOrder from './FinalPlaceReducer.js';
import stats from './statsReducer.js';
import selectedStat from './selectedStat.js';
import totalSims from './totalSimsReducer.js';

const rootReducer = combineReducers({
    draftLotteryOrder,
    stats,
    selectedStat,
    totalSims,
});

export default rootReducer;