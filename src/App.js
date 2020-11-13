import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc">
              <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Worldwide</MenuItem>
          </Select>
        </FormControl>
      </header>
    </div>
  );
}

export default App;
