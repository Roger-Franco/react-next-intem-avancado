import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [incre, setIncre] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);
  };

  const handleIncrement = () => {
    setIncre(incre + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador: {counter}</h1>
        {/* <button onClick={() => setReverse(!reverse)} type="button">
          Reverse {reverseClass}
        </button> */}
        <p>
          <button onClick={handleClick} type="button">
            Reverse {reverseClass}
          </button>
        </p>
        <p>
          <button onClick={handleIncrement} type="button">
            Increment {incre}
          </button>
        </p>
      </header>
    </div>
  );
}

// class App extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.hendleClick = this.hendleClick.bind(this);

//   //   this.state = {
//   //     reverse: false,
//   //   };
//   // }

//   // hendleClick() {
//   //   const { reverse } = this.state;
//   //   this.setState({ reverse: !reverse });
//   // }
//   // => clase fields*
//   state = {
//     reverse: false,
//   };

//   hendleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           {/* <button onClick={() => this.setState({ reverse: !reverse })} type="button"> */}
//           <button onClick={this.hendleClick} type="button">
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
