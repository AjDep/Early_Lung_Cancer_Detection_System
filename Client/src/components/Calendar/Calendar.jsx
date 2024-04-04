import React, { useState } from 'react';
import './Calendar.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs'; // Import dayjs

function Calendar({ onDateChange }) {
  const [date, setDate] = useState(null);
  
  const handleDateChange = (newDate) => {
    setDate(newDate.format('YYYY-MM-DD'));
    onDateChange(newDate); // Invoke the callback function with the selected date
    
  };

  return (
    <div className='cal'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          value={date}
          onChange={handleDateChange}
          orientation="portrait"
        />
      </LocalizationProvider>
    </div>
  );
}

export default Calendar;
