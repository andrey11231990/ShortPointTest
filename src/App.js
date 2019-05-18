import React from 'react';
import Notes from './components/notes';
import Form from './components/form';
import './App.css';

class App extends React.Component {
  state = {
    notes: []
  };

  newNoteObj(text, color, id) {
    return {text, color, id, time: new Date()};
  }

  edit = id => {};

  remove = id => {
    const {notes} = this.state;
    this.setState(state => ({notes: notes.filter(i => i.id !== id)}));
  };

  onSave = (text, color, id) => {
    const {notes} = this.state;
    if (id) {
      const nodeIndex = notes.findIndex(e => e.id === id);
      this.setState({notes: [...notes].splice(nodeIndex, 1, this.newNoteObj(text, color, id))});
    } else {
      this.setState(state => ({
        notes: [...state.notes, this.newNoteObj(text, color,  state.notes.length)] // id should be more unique
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <Form onSave={this.onSave} />
        <Notes notes={this.state.notes} edit={this.edit} remove={this.remove} />
      </div>
    );
  }
}

export default App;
