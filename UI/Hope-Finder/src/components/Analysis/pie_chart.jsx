import s from "./pie_chart.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Methane", value: 400 },
  { label: "Ethane", value: 300 },
  { label: "Propane", value: 300 },
];

function Pie_chart() {
  return (
    <div className={s.top_card}>
      <Row className="p-2" id={s.text}>
        <p>Alkane range</p>
      </Row>
      <Row>
        <Stack direction="row">
          <PieChart
            series={[
              {
                paddingAngle: 0,
                innerRadius: 50,
                outerRadius: 70,
                data,
              },
            ]}
            margin={{ right: 5 }}
            width={150}
            height={150}
            legend={{ hidden: true }}
          />
        </Stack>
      </Row>
    </div>
  );
}

export default Pie_chart;
