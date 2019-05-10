import { combineReducers } from 'redux';
import draftLotteryOrder from './FinalPlaceReducer.js';
import stats from './statsReducer.js';
import selectedStat from './selectedStat.js';
const rootReducer = combineReducers({
    draftLotteryOrder,
    stats,
    selectedStat,
});

export default rootReducer;