import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Planets</h1>

      <div className="form">
        <label>Planet Name: </label>
        <input type="text" name="planetName" />
        <label>Planet ID: </label>
        <input type="text" name="planetID" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
