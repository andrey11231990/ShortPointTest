import React from 'react';

function Input(props) {
  return (
    <div className="input">
      <label className="input__label">{props.label}</label>
      <input type="text" className="input__text" value={props.value} onChange={e => props.onChange(e.target.value)} />
    </div>
  )
}

export default Input;
