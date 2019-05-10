const DEFAULT_ARRAY = [];

const topFour = (state = DEFAULT_ARRAY, action) => {
    switch (action.type) {
        case 'SET_TOP_FOUR':
            state = action.payload;
            return state;
        default:
            return state;

    }
};

export default topFour;