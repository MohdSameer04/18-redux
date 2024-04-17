// USED FOR CLASS BASED COMPONENTS 
// import { Component } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import  {counterActions } from '../store/counter';
import classes from './Counter.module.css';


                                  // FUNCTION BASED COMPONENTS

const Counter = () => {

  // with the help of dispatch we can update the new value when we click on the button
  const dispatch = useDispatch();
  
  // with the help of useSelector when a state changes it will automatically changes state to the updated one 
  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    // dispatch({type : 'increment'})
    dispatch(counterActions.increment())
  }

  // adding payload to the action
  const increaseHandler = () => { 
    // dispatch({type : 'increase', amount: 5 })
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    // dispatch({type : 'decrement'})
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    // dispatch({type : 'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {/* with the help of this condition when user click on Toggle button so the counter was enable or disable */}
      {show && <div className={classes.value}>{counter}</div> }

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}> Increase by 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


                                      //CLASS BASED COMPONENTS

// class Counter extends Component{

//   incrementHandler() { 
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() { }
  
//   render(){
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// // SAME AS REDUCERS FUNCTION
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// // SAME AS DISPATCH FUNCTION
// const mapDispatchToProps = dispatch => {
//   return {
//     increment : () => dispatch({ type: 'increment'}),
//     decrement : () => dispatch({ type: 'decrement'})
//   }
// }

// // IN CLASS BASED EXPORT LIKE THIS 
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)


// FUNCTION BASED EXPORT
export default Counter;
