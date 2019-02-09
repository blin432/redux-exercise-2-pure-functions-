const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const card1 = document.getElementById('card1Button');
const card2 = document.getElementById('card2Button');

const cardValue = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const randomValue= ()=>{
    return cardValue[Math.floor(Math.random() * cardValue.length)];
};
const suitValue = ["C","D","H","S"];
const randomSuit=()=>{
    return suitValue[Math.floor(Math.random()*suitValue.length)];
};

card1.addEventListener ('click',e => 

dispatch({
    type:"RANDOMCARD1",
    newSuit:randomSuit(),
    newValue:randomValue()
}));


card2.addEventListener ('click',e => 

dispatch({
    type:"RANDOMCARD2",
    newSuit:randomSuit(),
    newValue:randomValue()
}));