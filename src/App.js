import React, { useState, useEffect, useMemo } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header/Header';
import StatsBar from './components/StatsBar/StatsBar';
import MapContainer from './components/MapContainer/MapContainer';
import Aside from './components/Aside/Aside';

import { sortData } from './helpers/utils';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(2);
  const [casesType, setCasesType] = useState('cases');

  // Change light or dark mode depending on user's browser preferences
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: lightBlue,
          background: {
            default: prefersDarkMode ? '#212121' : '#fafafa'
          }
        },
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      })
  }, [])

  useEffect(() => {
    const getCountriesDate = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map(country => (
            {
              id: country.countryInfo._id,
              name: country.country,
              value: country.countryInfo.iso2,
              flag: country.countryInfo.flag,
              latitude: country.countryInfo.lat,
              longitude: country.countryInfo.long,
              cases: country.cases,
              recovered: country.recovered,
              deaths: country.deaths,
              todayCases: country.todayCases,
              todayRecovered: country.todayRecovered,
              todayDeaths: country.todayDeaths,
            }
          )).filter(country => country.id != null)

          // console.log(data);
          // console.log(countries);

          const sortedData = sortData(countries);

          setTableData(sortedData);
          setCountries(countries);
        })
    }

    getCountriesDate();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <div className="app__main">
          <Header
            countries={countries}
            country={country}
            setCountry={setCountry}
            setCountryInfo={setCountryInfo}
            setMapCenter={setMapCenter}
            setMapZoom={setMapZoom}
          />
          <StatsBar countryInfo={countryInfo} setCasesType={setCasesType} />
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            countries={countries}
            casesType={casesType}
          />
        </div>
        <div className="app__aside">
          <Aside data={tableData} darkMode={prefersDarkMode} casesType={casesType} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
