import React, { Component, PropTypes } from 'react'
import Game from './game'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gridSize: 20,
      numBombs: 20,
    }
  }

  generateNewGame() {
    let gridSize = parseInt(this.refs.sizeInput.value)
    let numBombs = parseInt(this.refs.bombCount.value)
    if (!gridSize || !numBombs || gridSize * gridSize <= numBombs) {
      console.error("You cant do that!");
      return;
    }
    this.setState({gridSize, numBombs})
  }

  render() {
    return (
      <div>
        <input type="number" ref="sizeInput" />
        <input type="number" ref="bombCount" />
        <button onClick={this.generateNewGame.bind(this)}>Generate Game</button>
        <Game gridSize={this.state.gridSize} numBombs={this.state.numBombs} />
      </div>
    );
  }
}
