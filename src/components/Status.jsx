import React from 'react';

export default class Status extends React.Component {
  gameEnded() {
    return this.props.draw || (this.props.winner && this.props.winner.player);
  }

  endMessage() {
    let message;

    if (this.props.winner && this.props.winner.player) {
      if (this.props.player === this.props.winner.player) {
        message = "You win!";
      } else {
        message = "You lose (-_-)";
      }
    } else {
      message = "It's a draw!"
    }

    return message;
  }

  startNewGame() {
    this.props.newGame();
  }

  status() {
    let status = null;
    if (this.gameEnded()) {
      status = (
        <div>
          <h1 className="winner">{this.endMessage()}</h1>
          <button className="new-game" onClick={() => this.startNewGame() }>Start New Game</button>
        </div>
      );
    } else {
      let player = (this.props.nextPlayer === this.props.player ? 'Your turn' : 'Opponents turn')
      status = (
        <div>
          <h2>You are: {this.props.player}</h2>
          <h1 className="current-player">{player}</h1>
        </div>
      )
    }

    return status;
  }

  render() {
    return (
      <div id="status-container">
        {this.status()}
      </div>
    );
  }
}
