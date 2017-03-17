import React from 'react';

export default class Status extends React.Component {
  hasWinner() {
    return this.props.winner && this.props.winner.player;
  }

  startNewGame() {
    this.props.newGame();
  }

  render() {
    let status = null;
    if (this.hasWinner()) {
      status = (
        <div>
          <div className="winner">Winner: {this.props.winner.player}</div>
          <button className="new-game" onClick={() => this.startNewGame() }>Start New Game</button>
        </div>
      );
    } else {
      status = <div className="current-player">Player Turn: {this.props.nextPlayer}</div>;
    }
    return (
      <div id="status-container">
        {status}
      </div>
    );
  }
}
