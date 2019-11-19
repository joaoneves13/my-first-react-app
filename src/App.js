import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import LikeCounter from "./components/LikeCounter"
import AwesomeAnimals from "./components/AwesomeAnimals"

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Hi there!" />
        <LikeCounter />
        <AwesomeAnimals />
        
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
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
//           'Welcome to Codaisseur'
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
