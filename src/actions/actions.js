import * as types from '../constants/ActionTypes';
import * as Game from '../constants/Game';

export function startGame() {
  return {
    type: types.START_GAME,
    game: Game.INITIAL_STATE
  };
}

export function move(meta) {
  const { grid, player }  = meta;
  return {
    type: types.MOVE,
    game: {
      grid,
      player
    }
  };
}
