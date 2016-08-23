import React, { Component } from 'react';

class Tile extends Component {
  handleClick(e) {
    this.props.updateGame(this.props.tile, e.altKey);
  }

  render () {
    let { tile } = this.props;
    let content = "";
    let className = "tile";
    if (tile.bombed && tile.explored) {
      className += " explored bomb";
      content = "\u1F4A";
    } else if (tile.flagged) {
      className += " flag";
      content = '\u2691';
    } else if (tile.explored) {
      className += " explored";
      let bombs = tile.adjacentBombCount();
      content = bombs === 0 ? "" : bombs;
    }

    return (
      <div className={ className } onClick={this.handleClick.bind(this)}>{content}</div>
    );
  }
}

export default Tile;
