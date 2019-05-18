import React from 'react';

function Note(props) {
  return (
    <div className={`note note-color-${props.color}`}>
      <div className="note__tools">
        <div className="note__edit" onClick={() => props.edit(props.id)}>edit</div>
        <div className="note__remove" onClick={() => props.remove(props.id)}>remove</div>
      </div>
      <div className="note__title">{props.id}</div>
      <div className="note__text">{props.text}</div>
      <div className="note__date">{props.time.toLocaleString('en-us', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true})}</div>
    </div>
  )
}

export default Note;
