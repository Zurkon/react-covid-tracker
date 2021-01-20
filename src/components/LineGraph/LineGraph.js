import React, { useState, useEffect } from 'react';

import { Container, Paper } from '@material-ui/core';

import { Line } from 'react-chartjs-2';

import { buildChartData, casesTypeColors } from '../../helpers/utils';

import useStyles from './LineGraph.styles';

// Chart config
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        }
      },
    ],
  },
};

const LineGraph = ({ casesType }) => {
  const [data, setData] = useState({});

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=60')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          const chartData = buildChartData(data, casesType);
          // console.log(chartData);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType])

  return (
    <Container className={classes.root} component={Paper}>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: casesTypeColors[casesType].half_op,
                borderColor: casesTypeColors[casesType].hex,
                data: data
              }
            ]
          }}
          options={options}
        />
      )}
    </Container>
  );
}

export default LineGraph;