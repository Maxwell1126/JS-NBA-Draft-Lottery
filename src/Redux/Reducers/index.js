import { combineReducers } from 'redux';
import draftLotteryOrder from './FinalPlaceReducer.js';
const rootReducer = combineReducers({
    draftLotteryOrder,
    stats,
});

export default rootReducer;