import * as Game from '../constants/Game';
import * as Actions from '../constants/ActionTypes';
import { List, fromJS } from 'immutable';

function move(state, player) {
  let grid = state.get('grid');
  const nextPlayer = ( player.type === Game.PLAYER_O ? Game.PLAYER_X : Game.PLAYER_O);

  if (grid[player.position] === Game.EMPTY_CELL) {
    grid = setCharAt(grid, player.position, player.type);
    let cells = winnerDetected(grid, player.type);

    if (cells !== false) {
      return state.clear().set('cells', cells).set('winner', player.type);
    } else if (drawDetected(grid)) {
      return state.clear().set('isDraw', true);
    }

    return state.set('grid', grid).set('nextPlayer', nextPlayer);
  }

  return state;
}

function setCharAt(string, index, char) {
  if (index > string.length) {
    return string;
  }

  return string.substr(0, index) + char + string.substr(index + 1);
}

function drawDetected(grid) {
  return !grid.match(/-/g);
}

function winnerDetected(grid, lastPlayer) {
  for (let i = 0; i < Game.WINNING_CELLS.length; i++) {
    let cells = Game.WINNING_CELLS[i];

    if (lastPlayer === grid[cells[0]] &&
        lastPlayer === grid[cells[1]] &&
        lastPlayer === grid[cells[2]]) {
      return List(cells);
    }
  }

  return false;
}

export default function reducer(state = fromJS(Game.INITIAL_STATE), action) {
  switch(action.type) {
    case Actions.NEW_GAME:
      return Game.INITIAL_STATE;
    case Actions.MOVE:
        return move(state, action.player);
    default:
      return state;
  }
}
