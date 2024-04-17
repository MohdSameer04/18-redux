// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';

import authReducer from './auth';


            // THIS WAS WHEN WE USE REDUX WITHOUT REDUX-TOOLKIT

//  Creating a reducer funtion 
// const counterReducer = (state = initialState, action) => {

//     if(action.type === 'increment'){
//         return {
//             counter : state.counter + 1,
//             showCounter : state.showCounter
//         };
//     }

//     // setting payload to the action
//     if(action.type === 'increase'){
//         return{
//             counter : state.counter + action.amount,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter : state.counter - 1,
//             showCounter : state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         return{
//             showCounter : !state.showCounter,
//             counter : state.counter
//         }
//     }

//     return state;
// }

// with the help of this we create a redux store
// const store = createStore(counterReducer);

// const store = createStore(counterSlice.reducer)


// with the help of configure store we can combine multiple reducers into one reducers
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
})

export default store;