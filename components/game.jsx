import React, { Component } from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';
import Modal from './modal';

class Game extends Component {
  constructor({gridSize, numBombs}) {
    super();
    this.state = {
      board: new Minesweeper.Board(gridSize, numBombs),
    };
  }

  updateGame(tile, flagging) {
    let oldBoard = this.state.board.clone();

    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({
      board: this.state.board,
      oldBoard,
    });
  }

  undo() {
    if (this.state.oldBoard) {
      this.setState({board: this.state.oldBoard, oldBoard: null});
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gridSize !== this.props.gridSize || prevProps.numBombs !== this.props.numBombs) {
      console.log("Updated!");
      this.restartGame();
      // this.setState({baord: new Minesweeper.Board(nextProps.gridSize, nextProps.numBombs)})
    }
  }

  restartGame() {
    let { gridSize, numBombs } = this.props;
    this.setState({
      board: new Minesweeper.Board(gridSize, numBombs),
      oldBoard: null,
    });
  }

  render() {

    let won = this.state.board.won();
    let lost = this.state.board.lost();

    return (
      <div className="game-wrapper">
        <div className="game-header">
          <h1>React Minesweeper</h1>
          <button onClick={this.undo.bind(this)} className="undo" disabled={this.state.oldBoard ? false : true}>Undo</button>
        </div>
        <Board board={this.state.board.grid} updateGame={this.updateGame.bind(this)}/>
        { won || lost ? <Modal won={won} undo={this.undo.bind(this)} restart={this.restartGame.bind(this)}/> : null }
      </div>
    );
  }
}

Game.defaultProps = {
  gridSize: 15,
  numBombs: 20,
};

export default Game;
