import logo from './logo.svg';
import './App.css';
import data from './data/payload.json';
import Components from './components.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tudor's Store DSL</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="Store">
        {data.components.map(block => Components(block))}
      </div>

    </div>
  );
}

export default App;
