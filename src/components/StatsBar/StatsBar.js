import React from 'react';

import InfoBox from '../InfoBox/InfoBox';

import { formatStat } from '../../helpers/utils';

import useStyles from './StatsBar.styles';

const StatsBar = ({ countryInfo, setCasesType }) => {
  const classes = useStyles();

  return (
    <div className={classes.stats}>
      <InfoBox
        title="COVID Cases"
        cases={formatStat(countryInfo.todayCases)}
        total={formatStat(countryInfo.cases)}
        onClick={(e) => setCasesType("cases")}
      />
      <InfoBox
        title="Recovered"
        cases={formatStat(countryInfo.todayRecovered)}
        total={formatStat(countryInfo.recovered)}
        onClick={(e) => setCasesType("recovered")}
      />
      <InfoBox
        title="Deaths"
        cases={formatStat(countryInfo.todayDeaths)}
        total={formatStat(countryInfo.deaths)}
        onClick={(e) => setCasesType("deaths")}
      />
    </div>
  );
}

export default StatsBar;