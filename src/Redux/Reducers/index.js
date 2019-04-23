import { combineReducers } from 'redux';
import draftLotteryOrder from './FinalPlaceReducer.js';
const rootReducer = combineReducers({
    draftLotteryOrder,
});

export default rootReducer;