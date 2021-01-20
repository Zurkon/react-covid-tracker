import numeral from 'numeral';

export const casesTypeColors = {
  cases: {
    hex: "#fb4443",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 300,
  },
  recovered: {
    hex: "#7dd71d",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 300,
  },
  deaths: {
    hex: "#CC1034",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 600,
  },
};

export const sortData = data => {
  const sortedData = [...data];

  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  })

  return sortedData;
}

export const buildChartData = (data, casesType = 'cases') => {
  const chartData = [];
  let lastDataPoint;

  for (let date in data[casesType]) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint
      }
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }

  return chartData;

}

export const formatStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";