import React from 'react';
import Input from './input';
import Dropdown from './dropdown';
import Button from './button';

class Form extends React.Component {
  state = {
    text: '',
    color: '',
  };
  onTextChanged = (text) => {
    this.setState({text});
  };
  onColorChanged = (color) => {
    this.setState({color});
  };
  submitForm = () => {
    const { text, color } = this.state;
    this.props.onSave(text, color, this.props.id);
  };

  render() {
    
    return (
      <div className="form">
        <Input label="Note Text" value={this.state.text} onChange={this.onTextChanged} />
        <Dropdown label="Note Color" options={[{value: 'v', text: 'v'}, {value: 'v1', text: 'v1'}, ]} selected={this.state.color} onChange={this.onColorChanged} />
        <Button text="ADD NOTE" onClick={this.submitForm} />
      </div>
    );
  }
}

export default Form;
