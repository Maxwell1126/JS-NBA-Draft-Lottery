const DEFAULT_ORDER =
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
    { name: "Boston", seed: 14, place: 14 }];
let draftOrder =
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
    { name: "Boston", seed: 14, place: 14 }];
const draftLotteryOrder = (state = DEFAULT_ORDER, action) => {
    switch (action.type) {
        case 'SET_ORDER':
        let latestOrder = action.payload;
            console.log('database response', action.payload);
            // for (let i = 0; i < action.payload.length; i++) {
            //     for (let j = 0; j < draftOrder.length; j++) {
            //         if (draftOrder[j].seed == action.payload[i].team_id) {
            //             draftOrder[j].place = action.payload[i].place;
            //         }
            //     }
            // }
            // function propComparator(prop) {
            //     return function (a, b) {
            //         return a[prop] - b[prop];
            //     }
            // }
            // draftOrder = draftOrder.sort(propComparator('place'));
            for (let i = 0; i < latestOrder.length; i++) {
                if (latestOrder[i].seed == 9 && latestOrder[i].place < 5) {
                    latestOrder[i].name = "Dallas";
                } else if (latestOrder[i].seed== 9 && latestOrder[i].place > 4) {
                    latestOrder[i].name = "Atlanta";
                } else if (latestOrder[i].seed == 8 && latestOrder[i].place > 8) {
                    latestOrder[i].name = "Boston";
                } else if (latestOrder[i].seed == 8 && latestOrder[i].place <= 8) {
                    latestOrder[i].name = "Memphis";
                } else if (latestOrder[i].seed == 14 && latestOrder[i].place == 1) {
                    latestOrder[i].name = "Sacramento";
                } else if (latestOrder[i].seed == 14 && latestOrder[i].place != 1) {
                    latestOrder[i].name = "Boston";
                }
            }
            console.log('draft order', latestOrder);
            state = latestOrder
            return state;
        case 'DRAFT_ORDER':
            return state;
        case 'ORIGINAL_ORDER':
            return DEFAULT_ORDER;
        default:
            return state;
    }
};

export default draftLotteryOrder;