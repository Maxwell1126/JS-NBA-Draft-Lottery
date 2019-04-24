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
            
            if (DEFAULT_ORDER[i].name != (action.payload.first && action.payload.second ||
                action.payload.third && action.payload.fourth)){
                bottomTwelve.push(DEFAULT_ORDER[i]);
            } else if (i.name == action.payload.first){
                    DEFAULT_ORDER[i].place = 1;
                finalOrder.push(DEFAULT_ORDER[i]);
            } else if (i.name == action.payload.second){
                DEFAULT_ORDER[i].place = 2;
                finalOrder.push(DEFAULT_ORDER[i]);
            } else if (i.name == action.payload.third){
                DEFAULT_ORDER[i].place = 3;
                finalOrder.push(DEFAULT_ORDER[i]);
            } else if (i.name == action.payload.fourth){
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
            return finalOrder;
        case 'DRAFT_ORDER':
            return state;
        // case 'LOGOUT':
        //     return DEFAULT_REQUEST;
        default:
            return state;
    }
};

export default draftLotteryOrder;