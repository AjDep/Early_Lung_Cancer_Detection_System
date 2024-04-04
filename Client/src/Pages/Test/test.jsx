import React, { useState } from 'react';
import '../Test/test.css';
import data from '../../../src/data.json';
import InputLabel from '@mui/material/InputLabel';

export default function Test() {
  const [gender, setGender] = useState('');
  const filteredData = gender ? data.filter(item => item.gender === gender) : data;
  console.log(gender);

  return (
    <div>
       <button onClick={() => setGender('Male')}>Male</button>
      <button onClick={() => setGender('Female')}>Female</button>
      {filteredData.map((number) => (
        <div className='Table1' key={number.id}>
          <p>{number.first_name}</p>
          <p>{number.gender}</p>
        </div>
      ))}
    </div>
  );
}
