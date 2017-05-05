import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import Grid from '../components/Grid';
import Status from '../components/Status';
import io from 'socket.io-client'

class App extends React.Component {
  componentDidMount() {
    let socket = io()

    console.log(socket)
  }

  render() {

    return (
      <div id="app-container">
        <Status
          newGame={this.props.newGame}
          winner={this.props.winner}
          nextPlayer={this.props.nextPlayer}
          player={this.props.player}
          draw={this.props.draw} />
        <Grid {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: 'O',
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
