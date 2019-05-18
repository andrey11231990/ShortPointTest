import React from 'react';

function Button(props) {
  return (
    <div className="button" onClick={props.onClick}>
      <span>{props.text}</span>
    </div>
  );
}

export default Button;
