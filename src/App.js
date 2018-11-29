// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


// export default App;

import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'

const App = ({ message, counter, dispatch }) => (
  <div className="container">
    <div className="columns column is-12">
      <p>{message}</p>
      <h1>Counter : {counter}</h1>
    </div>

    <div className="buttons">
    {/*store.dispatch({
        type: 'INCREMENT',
        score: 1
      })
    */}
      {/*<button className="button is-primary">+1</button>
      <button className="button is-link">+2</button>
      <button className="button is-info">+3</button>*/}
      <button onClick={()=> dispatch(increment(1))} className="button is-primary">+1</button>
      <button onClick={()=> dispatch(increment(2))} className="button is-link">+2</button>
      <button onClick={()=> dispatch(increment(3))} className="button is-info">+3</button>
    </div>
    <div className="buttons">
      {/*<button className="button is-primary">-1</button>
      <button className="button is-link">-2</button>
      <button className="button is-info">-3</button>*/}
      <button onClick={()=> dispatch(decrement(1))} className="button is-primary">-1</button>
      <button onClick={()=> dispatch(decrement(2))} className="button is-link">-2</button>
      <button onClick={()=> dispatch(decrement(3))} className="button is-info">-3</button>
    </div>
  </div>
)

const mapStateToProps = function(state) {
  return {
    message: 'This is message from mapStateToProps',
    counter: state.counters || 0
  }
}
// หรือเขียนแบบ Arrow function
// const mapStateToProps = state => ({
//   message: 'This is message from mapStateToProps',
//   counter: state.counters || 0
// })
const AppWithConnect = connect(mapStateToProps)(App)
export default AppWithConnect
