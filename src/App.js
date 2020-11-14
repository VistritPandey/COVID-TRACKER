import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core"
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([
    'USA', 'UK', 'India'
  ]);

  useEffect(() => {

    const getCountriesData  =async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ))
      })
    }
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc">

            {
              countries.map(country =>(
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
