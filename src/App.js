import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core"
import { useEffect, useState } from 'react';
import InfoBox from './InfoBox';
import Map from './Map'
import Table from './Table'
import { sortData } from "./util";
import LineGraph from "./LineGraph";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() =>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then(data => {
      setCountryInfo(data)
    });
  },[]);


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
        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries)
      })
    }
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countrycode = event.target.value;

    const url =
     countrycode === 'worldwide'
     ? 'https://disease.sh/v3/covid-19/all'
     : `https://disease.sh/v3/covid-19/countries/${countrycode}`;
    
     await fetch(url)
      .then((response) => response.json())
      .then(data => {
          setCountry(countrycode);
          setCountryInfo(data);
      })
  };
  console.log(countryInfo)

  return (
    <div className="App">
      <div className="app__left">
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
        <InfoBox title="Covid Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
        <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
      </div>
      <Map />
      </div>
      <Card className="app__right">
            <CardContent>
              <h3>Live cases by Country</h3>
              <Table countries={tableData}/>
              <h3>Worldwide cases</h3>
              <LineGraph />
            </CardContent>
      </Card>
    </div>
  );
}

export default App;
