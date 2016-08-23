import React, { Component } from 'react';

class Tile extends Component {
  handleClick(e) {
    this.props.updateGame(this.props.tile, false);
  }

  handleRightClick(e) {
    e.preventDefault();
    this.props.updateGame(this.props.tile, true);
  }

  render () {
    let { tile } = this.props;
    let content = <span>&nbsp;&nbsp;</span>;
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
      content = bombs === 0 ? <span>&nbsp;&nbsp;</span> : bombs;
    }

    return (
      <div
        className={className}
        onClick={this.handleClick.bind(this)}
        onContextMenu={this.handleRightClick.bind(this)}>
        {content}
      </div>
    );
  }
}

export default Tile;
