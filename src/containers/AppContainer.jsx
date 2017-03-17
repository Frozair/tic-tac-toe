import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Grid from '../components/Grid';
import Status from '../components/Status';

class App extends React.Component {
  render() {

    return (
      <div id="app-container">
        <Status
          newGame={this.props.newGame}
          winner={this.props.winner}
          nextPlayer={this.props.nextPlayer}
          draw={this.props.draw} />
        <Grid {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
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

export const AppContainer = connect(mapStateToProps, actions)(App);
