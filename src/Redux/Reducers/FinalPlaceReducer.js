const DEFAULT_ORDER = {
    lotteryTeams:
[{ name: "New York", seed: 1, place: 1 },
{ name: "Cleveland", seed: 2, place: 2 },
{ name: "Phoenix", seed: 3, place: 3 },
{ name: "Chicago", seed: 4, place: 4 },
{ name: "Atlanta", seed: 5, place: 5 },
{ name: "Washington", seed: 6, place: 6 },
{ name: "New Orleans", seed: 7, place: 7 },
{ name: "Memphis", seed: 8, place: 8 },
{ name: "Atlanta", seed: 9, place: 9 },
{ name: "Minnesota", seed: 10, place: 10 },
{ name: "Los Angeles", seed: 11, place: 11 },
{ name: "Charlotte", seed: 12, place: 12 },
{ name: "Miami", seed: 13, place: 13 },
{ name: "Boston", seed: 14, place: 14 }],
    }

const draftLotteryOrder = (state = DEFAULT_ORDER, action) => {
    switch (action.type) {
        case 'SET_SICK_START_DATE':
            const startDate = action.payload;
            let endDate = state.endDate;
            if (startDate >= endDate) {
                endDate = startDate;
            }
            return {
                ...state,
                startDate: startDate,
                endDate: endDate
            };
        case 'SET_SICK_START_HOURS':
            return {
                ...state,
                startHours: action.payload
            };
        case 'SET_SICK_END_DATE':
            return {
                ...state,
                endDate: action.payload
            };
        case 'SET_SICK_END_HOURS':
            return {
                ...state,
                endHours: action.payload
            };
        case 'RESET_REQUEST':
            return DEFAULT_REQUEST;
        case 'LOGOUT':
            return DEFAULT_REQUEST;
        default:
            return state;
    }
};

export default draftLotteryOrder;