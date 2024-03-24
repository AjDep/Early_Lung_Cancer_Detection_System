import Header from "../../components/header/header";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Row, Col } from "react-bootstrap";
import Pie_chart from "./../../components/Analysis/pie_chart";
import style from "./history.module.css";
import Chip from "@mui/material/Chip";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import { LineChart } from "@mui/x-charts/LineChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

const settings = {
  width: 200,
  height: 200,
  value: 60,
};

function History() {
  return (
    <div>
      <Header name="History" />

      <div className="content">
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
            <Box gridColumn="span 8">
              <Item className={style.box1}>
                <h1>Test Times</h1>
                <Chip label="27" color="success" className={style.text} />
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item className={style.box2}>
                <Pie_chart />
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                  series={[
                    {
                      data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 3, 8],
                      showMark: ({ index }) => index % 2 === 0,
                    },
                  ]}
                  width={500}
                  height={300}
                />
              </Item>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default History;
