import React from 'react';
import style from './popup.module.css';

function Popup({ fields, onSave, onCancel }) {
    return (
      <div className={style.popup}>
        {fields.map(field => (
          <div key={field.name}>
            <label>{field.label}</label>
            <input type={field.type} defaultValue={field.value} />
          </div>
        ))}
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    );
  }
  
  export default Popup;