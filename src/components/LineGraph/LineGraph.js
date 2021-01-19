import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

import { buildChartData } from '../../helpers/utils';

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
          console.log(data);
          const chartData = buildChartData(data, casesType);
          console.log(chartData);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType])

  return (
    <div className={classes.root}>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: 'rgba(204,16, 52, 0.5)',
                borderColor: '#CC1034',
                data: data
              }
            ]
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;