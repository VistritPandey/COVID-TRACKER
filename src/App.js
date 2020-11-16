import './App.css';
import {MenuItem, FormControl, Select} from "@material-ui/core"
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map'

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

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
        setCountries(countries)
      })
    }
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countrycode = event.target.value;
    setCountry(countrycode)
  }

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map(country =>(
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Covid Cases" cases={1234500} total={2020}/>
        <InfoBox title="Deaths" cases={54321} total={2019}/>
        <InfoBox title="Recovered" cases={909090} total={2021}/>
      </div>
      <Map />
    </div>
  );
}

export default App;
