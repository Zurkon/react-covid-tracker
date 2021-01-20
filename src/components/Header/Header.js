import React from 'react';

import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

import useStyles from './Header.styles';

const Header = ({ countries, country, setCountry, setCountryInfo, setMapCenter, setMapZoom }) => {
  const classes = useStyles();

  const handleChange = async (event) => {
    const countryCode = event.target.value;

    if (countryCode === 'worldwide') {
      setCountryInfo(countries);
    } else {
      const selectedCountry = countries.filter(country => country.value === countryCode);
      setCountryInfo(selectedCountry[0]);
      setMapCenter([selectedCountry[0].latitude, selectedCountry[0].longitude]);
      setMapZoom(4);
    }
    setCountry(countryCode);
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