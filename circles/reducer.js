const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type,color,randomColor } = action;

    if (type === "RANDOM"){
        console.log(randomColor);
        return  [...state,{
        //need to ask Adam if this is unpure
        radius:Math.floor(Math.random() * Math.floor(150)),
        color:`#${randomColor}`
    }]
      
    }
    // ACTION: Add a random circle

    return state;
}