import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core"
function App() {
  return (
    <div className="App">
      <div className="app__header">
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
      </div>
    </div>
  );
}

export default App;
