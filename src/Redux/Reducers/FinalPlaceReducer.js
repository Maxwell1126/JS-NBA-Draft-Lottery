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
{ name: "Boston", seed: 14, place: 14 }]

const draftLotteryOrder = (state = DEFAULT_ORDER, action) => {
    switch (action.type) {
        case 'SET_ORDER':
        let bottomTwelve = [];
        let finalOrder = [];
        let placeCounter = 5;
        console.log('action', action.payload);
        
        for(let i =0; i < DEFAULT_ORDER.length; i++){
            console.log('default dot i', DEFAULT_ORDER[i]);
            
            if (DEFAULT_ORDER[i].seed != action.payload.first.seed && DEFAULT_ORDER[i].seed != action.payload.second.seed &&
                DEFAULT_ORDER[i].seed != action.payload.third.seed && DEFAULT_ORDER[i].seed != action.payload.fourth.seed){
                bottomTwelve.push(DEFAULT_ORDER[i]);
            } else if (DEFAULT_ORDER[i].seed == action.payload.first.seed){
                    DEFAULT_ORDER[i].place = 1;
                finalOrder.push(DEFAULT_ORDER[i]);
            } else if (DEFAULT_ORDER[i].seed == action.payload.second.seed){
                DEFAULT_ORDER[i].place = 2;
                finalOrder.push(DEFAULT_ORDER[i]);
            } else if (DEFAULT_ORDER[i].seed == action.payload.third.seed){
                DEFAULT_ORDER[i].place = 3;
                finalOrder.push(DEFAULT_ORDER[i]);
            } else if (DEFAULT_ORDER[i].seed == action.payload.fourth.seed){
                DEFAULT_ORDER[i].place = 4;
                finalOrder.push(DEFAULT_ORDER[i])
            }
        }
        console.log('bottomTwelve', bottomTwelve);
        console.log('finalOrder', finalOrder);
        
        
            function propComparator(prop) {
                return function (a, b) {
                    return a[prop] - b[prop];
                }
            }
        bottomTwelve = bottomTwelve.sort(propComparator('seed'));
            for (let i = 0; i < bottomTwelve.length; i++){
                bottomTwelve[i].place = placeCounter;
                finalOrder.push(bottomTwelve[i]);
                placeCounter++;
            }

            finalOrder = finalOrder.sort(propComparator('place'));
            for (let i = 0; i < finalOrder.length; i++) {
                if (finalOrder[i].seed == 9 && finalOrder[i].place < 5){
                    finalOrder[i].name = "Dallas";
                } else if (finalOrder[i].seed == 9 && finalOrder[i].place > 4){
                    finalOrder[i].name = "Atlanta";
                } else if (finalOrder[i].seed == 8 && finalOrder[i].place > 8){
                    finalOrder[i].name = "Boston";
                } else if (finalOrder[i].seed == 8 && finalOrder[i].place <= 8){
                    finalOrder[i].name = "Memphis";
                } else if (finalOrder[i].seed == 14 && finalOrder[i].place == 1){
                    finalOrder[i].name = "Sacramento";
                } else if (finalOrder[i].seed == 14 && finalOrder[i].place != 1){
                    finalOrder[i].name = "Boston";
                }
            }
            return finalOrder;
        case 'DRAFT_ORDER':
            return state;
        default:
            return state;
    }
};

export default draftLotteryOrder;