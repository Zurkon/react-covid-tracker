import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import CasesTable from '../CasesTable/CasesTable';
import LineGraph from '../LineGraph/LineGraph';

import useStyles from './Aside.styles';

const Aside = ({ data, darkMode }) => {
  const classes = useStyles(darkMode);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          Live Cases by Country
        </Typography>
        <CasesTable countries={data} />
        <Typography variant="h6">
          Worldwide new cases
        </Typography>
        <LineGraph />
      </CardContent>
    </Card>
  )
}

export default Aside;