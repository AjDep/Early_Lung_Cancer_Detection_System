import { PieChart } from '@mui/x-charts/PieChart';
import style from './PieChart.module.css';

function PieChartCustom() {
    return (
        <div className={style.chart}>
        <PieChart
            series={[
                {
                    data: [{ name: 'Category A', value: 30 },
                    { name: 'Category B', value: 20 },
                    { name: 'Category C', value: 50 },],
                    innerRadius: 30,
                    outerRadius: 70,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -90,
                    endAngle: 180,
                    cx: 120,
                    cy: 70,
                }]}
        />
    </div>
    );
  }
  
  export default PieChartCustom;
  