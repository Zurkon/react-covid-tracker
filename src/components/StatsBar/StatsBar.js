import React from 'react';

import InfoBox from '../InfoBox/InfoBox';

import useStyles from './StatsBar.styles';

const StatsBar = ({ countryInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.stats}>
      <InfoBox title="COVID Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
      <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
      <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
    </div>
  );
}

export default StatsBar;