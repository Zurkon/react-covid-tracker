import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import useStyles from './InfoBox.styles';

const InfoBox = ({ title, cases, total }) => {
  const classes = useStyles();

  return (
    <Card className={classes.infoBox}>
      <CardContent>
        <Typography color="textSecondary">
          {title}
        </Typography>
        <h1 className={classes.info, title === 'Recovered' ? classes.recovered : title === "Deaths" ? classes.deaths : classes.cases} >
          {cases}
        </h1>
        <Typography color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox;