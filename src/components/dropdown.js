import React from 'react';

function Dropdown(props) {
  return (
    <div className="dropdown">
      <label className="dropdown__label">{props.label}</label>
      <select name="select" className="dropdown__select" onChange={e => props.onChange(e.target.value)}>
        {props.options.map(o => (<option value={o.vaue} className="dropdown__option" key={o.value}>{o.text}</option>))}
      </select>
    </div>
  )
}

export default Dropdown;
