const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type,value,suit,newSuit,newValue } = action;

    
    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type === "RANDOMCARD1"){
        return [
            {
            value:newValue,
            suit:newSuit},
            ...state.slice(1,2)
        ]}
    
        else if(type ==="RANDOMCARD2"){
            return [
                ...state.slice(0,1),
                {
                    value:newValue,
                    suit:newSuit
                }
            ]
        }
    return state;
}