import React from 'react';

import Cell from './Cell'

export default class Grid extends React.Component {
  getCells() {
    return this.props.grid || '';
  }

  move(position) {    
    const player = {
      type: this.props.nextPlayer,
      position
    };
    this.props.move(player);
  }

  render() {
    let cells = [];
    for (let i = 0; i < this.getCells().length; i++) {
      cells.push(
        <Cell
          key={i}
          cell={this.getCells()[i]}
          move={() => this.move(i)}/>
      )
      if ((i + 1) % 3 === 0) {
        cells.push(<br key={"br" + i} />);
      }
    }

    return (
      <div>
        {cells}
      </div>
    );
  }
}
