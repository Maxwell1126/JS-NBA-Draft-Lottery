const DEFAULT_STATE= [0];

const totalSims = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_TOTAL_SIMS':
            state = action.payload;
            return state;
        case 'RESET_TOTAL_SIMS':
            state = DEFAULT_STATE;
            return state;
        default:
            return state;

    }
};

export default totalSims;