const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type,name } = action;

    // Add a Name Tag
    if(type==="NEWNAMETAG"){
       var newArray=
         [...state, name];
        return newArray;
    }
    return state;
}