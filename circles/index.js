const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const randomButton = document.getElementById('addCircle');

// const randomSize= ()=>{
//     return Math.floor(Math.random() * Math.floor(150))
// };

const randomColor=()=>{
    return Math.floor(Math.random()*16777215).toString(16)
}

randomButton.addEventListener ('click',e => 

dispatch({
    type:"RANDOM",
    randomColor:randomColor()
}));