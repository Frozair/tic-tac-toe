import React from 'react';

export default class Cell extends React.Component {
  playerMove() {
    const player = {
      type: this.props.nextPlayer,
      position: this.props.position
    };
    this.props.move(player);
  }

  render() {
    return (
      <div onClick={() => this.playerMove()}>
        {this.props.cell}
      </div>
    );
  }
}
