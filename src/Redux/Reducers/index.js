import { combineReducers } from 'redux';
import draftLotteryOrder from './FinalPlaceReducer.js';
import stats from './statsReducer.js';
import topFour from './topFourReducer.js';
const rootReducer = combineReducers({
    draftLotteryOrder,
    stats,
    topFour,
});

export default rootReducer;