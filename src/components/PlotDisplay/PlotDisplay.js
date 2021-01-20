import React from 'react';

import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

import { casesTypeColors } from '../../helpers/utils';

import useStyles from './PlotDisplat.styles';

const PlotDisplay = ({ data, casesType = "cases" }) => {
  const classes = useStyles();

  return (
    data.map(country => (
      <Circle
        key={country.id}
        center={[country.latitude, country.longitude]}
        fillOpacity={0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }
      >
        <Popup>
          <div className={classes.container}>
            <div
              className={classes.flag}
              style={{ backgroundImage: `url(${country.flag})` }}
            ></div>
            <div className={classes.name}>{country.name}</div>
            <div className={classes.info}>
              Cases: {numeral(country.cases).format("0,0")}
            </div>
            <div className={classes.info}>
              Recovered: {numeral(country.recovered).format("0,0")}
            </div>
            <div className={classes.info}>
              Deaths: {numeral(country.deaths).format("0,0")}
            </div>
          </div>
        </Popup>

      </Circle>
    ))
  )
};

export default PlotDisplay;