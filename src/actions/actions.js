import * as types from '../constants/ActionTypes';

export function startGame() {
  return {
    type: types.START_GAME,
    game: {
      grid: '---------',
      nextPlayer: 'O'
    }
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
