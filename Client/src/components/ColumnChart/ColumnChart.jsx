import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import s from '../ColumnChart/ColumnChart.module.css'
import SelectBos from "../BasicSelect/BasicSelect"

function ColumnChart() {
  const [apiData, setApiData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState();
  useEffect(() => {
    fetch('http://localhost:5038/api/Customer/Chart')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const chartData = [["Date", "Alkane percentage", { role: "style" }]];
  const filteredData = selectedMonth ? apiData.filter(item => item.Date.Object.Month=== selectedMonth) :apiData;
  if (!filteredData.length) {
    // Handle empty data case: show message
  
    return  <div>
      <SelectBos setMonth={setSelectedMonth} />
      No data available for this month
      </div>;
  }
  
  console.log(selectedMonth)
  filteredData.forEach(item => {
    // Extracting date and month from the Date object
    const date = `${item.Date.Object.Day}/${item.Date.Object.Month}`;
    chartData.push([date,parseFloat( item.AlkaneRange),item.color]);
  });

  const chartOptions = {
    title: "Alkane Percentage Chart",
    hAxis: { title: "Date",format:'dd?MM' },
    vAxis: { title: "Alkane percentage" },
    is3D:true
    // Add other options as needed...
  };

  return (
    <div className={s.ColumnChart}>
      <div>
      <SelectBos setMonth={setSelectedMonth} />
            

    <Chart 
      chartType="ColumnChart"
      width="850px"
      height="250px"
      data={chartData}
      options={chartOptions}
    />
    </div>
    </div>
  );
}

export default ColumnChart;
