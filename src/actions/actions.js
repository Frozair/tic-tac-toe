import * as ActionTypes from '../constants/ActionTypes';

export function newGame() {
  return {
    type: ActionTypes.NEW_GAME
  };
}

export function move(player) {
  return {
    type: ActionTypes.MOVE,
    player
  };
}
