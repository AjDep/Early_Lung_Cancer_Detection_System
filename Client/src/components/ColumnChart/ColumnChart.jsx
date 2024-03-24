import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import s from '../ColumnChart/ColumnChart.module.css'

function ColumnChart() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5038/api/Customer/Chart?month=9')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const chartData = [["Date", "Alkane percentage", { role: "style" }]];

  apiData.forEach(item => {
    // Extracting date and month from the Date object
    const date = `${item.Date.Object.Date}/${item.Date.Object.Month}`;
    chartData.push([date, item.AlkaneRange,item.color]);
  });

  const chartOptions = {
    title: "Alkane Percentage Chart",
    hAxis: { title: "Date" },
    vAxis: { title: "Alkane percentage" },
    is3D:true
    // Add other options as needed...
  };

  return (
    <div className={s.ColumnChart}>
    <Chart 
      chartType="ColumnChart"
      width="850px"
      height="250px"
      data={chartData}
      options={chartOptions}
    />
    </div>
  );
}

export default ColumnChart;
