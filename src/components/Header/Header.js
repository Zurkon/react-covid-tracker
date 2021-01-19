import React from 'react';

import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

import useStyles from './Header.styles';

const Header = ({ countries, country, setCountry, setCountryInfo }) => {
  const classes = useStyles();

  const handleChange = async (event) => {
    const countryCode = event.target.value;

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
      })
  }

  return (
    <header className={classes.header}>
      <h1>COVID-19 TRACKER</h1>
      <FormControl variant="filled" className={classes.dropdown}>
        <InputLabel id="country-label">Tracking</InputLabel>
        <Select labelId="country-label" value={country} onChange={handleChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {
            countries.map(country => <MenuItem key={country.id} value={country.value}>{country.name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </header>
  );
}

export default Header;