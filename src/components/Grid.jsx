import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Cell from './Cell'

class Grid extends React.Component {
  getCells() {
    return this.props.grid || '';
  }

  render() {
    let cells = [];
    for (let i = 0; i < this.getCells().length; i++) {
      cells.push(
        <Cell
          key={i}
          cell={this.getCells()[i]}
          position={i}
          nextPlayer={this.props.nextPlayer}
          move={this.props.move}/>
      )
      if ((i + 1) % 3 === 0) {
        cells.push(<br key={"br" + i} />);
      }
    }

    let meta = null;
    if (this.props.winner && this.props.winner.player) {
      meta = (
        <div>
          <div className="winner">Winner: {this.props.winner.player}</div>
          <button className="new-game" onClick={() => this.props.newGame() }>Start New Game</button>
        </div>
      );
    } else {
      meta = <div className="current-player">Player Turn: {this.props.nextPlayer}</div>;
    }
    return (
      <div>
        {meta}
        {cells}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    nextPlayer: state.get('nextPlayer'),
    grid: state.get('grid'),
    draw: state.get('isDraw'),
    winner: {
      player: state.get('winner'),
      cells: state.get('cells')
    }
  }
}

export const GridContainer = connect(mapStateToProps, actions)(Grid);
