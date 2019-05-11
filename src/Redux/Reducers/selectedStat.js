const DEFAULT_ARRAY =
    [{ name: 'New York', id: 1 },
    { name: 'Cleveland', id: 2 },
    { name: 'Phoenix', id: 3 },
    { name: 'Chicago', id: 4 },
    { name: 'Atlanta', id: 5 },
    { name: 'Washington', id: 6 },
    { name: 'New Orleans', id: 7 },
    { name: 'Memphis', id: 8 },
    { name: 'Dallas', id: 9 },
    { name: 'Minnesota', id: 10 },
    { name: 'Los Angeles', id: 11 },
    { name: 'Charlotte', id: 12 },
    { name: 'Miami', id: 13 },
    { name: 'Boston', id: 14 },];

const selectedStat = (state = DEFAULT_ARRAY, action) => {
    switch (action.type) {
        case 'SET_TOP_FOUR':
            state = action.payload;
            return state;
        case 'SET_PLACES':
            state = action.payload;
            return state;
        case 'MEAN_PLACE':
            state = action.payload;
            return state;
        case 'UNSELECTED_STATS':
            return state;
        default:
            return state;

    }
};

export default selectedStat;