import logo from './logo.svg';
import './App.css';
import data from './data/payload.json';
import Components from './components.js';

import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Tudor's Store DSL</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div id="store">
        {data.components.map(block => Components(block))}
      </div>

    </div>
  );
}

export default App;
