import React, { Component } from 'react';
import Tile from './tile';

class Board  extends Component{
  render () {
    let rows = this.props.board.map((row, rowIdx) => (
      <div key={rowIdx} className="row"> {
        row.map((tile, tileIdx) => (
          <Tile tile={tile} updateGame={this.props.updateGame} key={`${rowIdx}${tileIdx}`}/>
        ))
      }
      </div>
    ));

    return (
      <div className="board-wrapper">
        {rows}
      </div>
    );
  }
}

export default Board;
