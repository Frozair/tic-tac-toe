import * as ActionTypes from '../constants/ActionTypes';
import * as Game from '../constants/Game';

export function newGame() {
  return {
    type: ActionTypes.NEW_GAME,
    game: Game.INITIAL_STATE
  };
}

export function move(meta) {
  const { grid, player }  = meta;
  return {
    type: ActionTypes.MOVE,
    game: {
      grid,
      player
    }
  };
}
