import React from 'react'
import './Calendar.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="portrait" />
    </LocalizationProvider>
  );
}

export default Calendar;