const Redux = require('redux')
const increment = {type: 'INCREMENT'}
const decrement = {type: 'DECREMENT'}

const reducer = (state = {counter: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {counter: state.counter + 1}
        case 'DECREMENT':
            return {counter: state.counter - 1}
        default:
            return state;
    }
}

const store = Redux.createStore(reducer)

//Test
console.log(store.getState().counter) //returns 0
store.dispatch(increment);
console.log(store.getState().counter) //returns 1
