import React from 'react'
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    console.log('App, render')
    return <div>
      <button onClick={() => this.setState({
        counter: this.state.counter + 1
      })}>click mi to plus 1</button>
      <p>counter: {this.state.counter}</p>
    </div>
  }
}
class AppWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    console.log('Appwrapper, render')
    return <div>
      <h2>i m wrapper</h2>
      <App />
    </div>
  }
}

export default AppWrapper;
