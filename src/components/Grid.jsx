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
    }

    return (
      <div>
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
