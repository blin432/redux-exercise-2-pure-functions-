const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const heightButton = document.getElementById('height');
const widthButton = document.getElementById('width');
const makeRed= document.getElementById('red');
const makeBlue = document.getElementById('blue');


heightButton.addEventListener ('click',e => 

dispatch({
    type:"HEIGHT"
}));


widthButton.addEventListener('click',e =>

    dispatch({
        type:"WIDTH"
    })
);

makeRed.addEventListener('click',e =>

    dispatch({
        type:"RED"
    })
);
makeBlue.addEventListener('click',e =>

    dispatch({
        type:"BLUE"
    })
);