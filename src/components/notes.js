import React from 'react';
import Note from './note';

class Notes extends React.Component {
  render() {
    const {notes, edit, remove} = this.props;
    if (notes.length === 0) {
      return (
        <div className="notes__empty-page">No records found</div>
      )
    }
    return (
      <div className="notes__container">
        {notes.map(note => <Note {...note} key={note.id} edit={edit} remove={remove} />)}
      </div>
    );
  }
}

export default Notes;
