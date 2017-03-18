import React from 'react';

export default class Status extends React.Component {
  gameEnded() {
    return this.props.draw || (this.props.winner && this.props.winner.player);
  }

  endMessage() {
    let message;

    if (this.props.winner && this.props.winner.player) {
      message = "Winner: " + this.props.winner.player;
    } else {
      message = "It's a draw!"
    }

    return message;
  }

  startNewGame() {
    this.props.newGame();
  }

  render() {
    let status = null;
    if (this.gameEnded()) {
      status = (
        <div>
          <h1 className="winner">{this.endMessage()}</h1>
          <button className="new-game" onClick={() => this.startNewGame() }>Start New Game</button>
        </div>
      );
    } else {
      status = <h1 className="current-player">Player Turn: {this.props.nextPlayer}</h1>;
    }
    return (
      <div id="status-container">
        {status}
      </div>
    );
  }
}
