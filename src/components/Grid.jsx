import React from 'react';
import { connect } from 'react-redux';

class Grid extends React.Component {
  getCells() {
    return this.props.grid || '';
  }

  render() {
    let cells = [];
    for (let i = 0; i < this.getCells().length; i++) {
      cells.push(<span key={i}>{this.getCells()[i]}</span>);
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
    grid: state.get('grid'),
    draw: state.get('isDraw'),
    winner: {
      player: state.get('winner'),
      cells: state.get('cells')
    }
  }
}

export const GridContainer = connect(mapStateToProps)(Grid);
