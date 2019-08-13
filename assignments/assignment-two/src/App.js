import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    textLength: 0,
    inputText: ''
  };
  changeText = e => {
    let inputText = e.target.value.trim();
    let textLength = inputText.length;
    this.setState({
      textLength: textLength,
      inputText: inputText
    });
  };
  charClickHandler = index => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      inputText: updatedText
    });
  };

  render() {
    const charsArray = this.state.inputText.split('');
    const chars = charsArray.map((char, index) => {
      return (
        <Char
          key={index}
          value={char}
          click={() => {
            this.charClickHandler(index);
          }}
        />
      );
    });
    return (
      <div className='App'>
        <input
          type='text'
          onChange={this.changeText}
          value={this.state.inputText}
        />
        <p>{this.state.inputText}</p>
        <p>
          <span className='textLength'>
            text length: {this.state.textLength}
          </span>
        </p>
        <Validation textLength={this.state.textLength} />
        {chars}
      </div>
    );
  }
}

export default App;
