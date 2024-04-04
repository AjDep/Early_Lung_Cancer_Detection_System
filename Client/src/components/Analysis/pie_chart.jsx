import React from 'react';
import CountUp from 'react-countup';
import { Statistic } from 'antd';
import "../Analysis/pie_chart.css"; 

const formatter = (value) => <CountUp end={value} separator="," />;

const PieChart = (props) => { // Added props as a parameter
  const { Alvalue } = props; // Destructuring props to get Alvalue
  return (
    <div>
      <div className='AlkaneCard'>
        <Statistic
          title="My Alkane Range"
          value={Alvalue}
          formatter={formatter}
          className='AlknaeCardDeatils' // Applying custom CSS class
        />
      </div>
    </div>
  );
};

export default PieChart;
