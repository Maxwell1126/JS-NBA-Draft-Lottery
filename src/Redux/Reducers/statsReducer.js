const DEFAULT_ARRAY = [];

const stats = (state = DEFAULT_ARRAY, action) => {
    switch (action.type) {
        case 'SET_STATS':
            state = action.payload;
            return state;
    }
};

export default stats;