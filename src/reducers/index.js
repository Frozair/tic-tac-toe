import * as Game from '../constants/Game';
import * as Actions from '../constants/ActionTypes';

export default function reducer(state = Game.INITIAL_STATE, action) {
  switch(action.type) {
    case Actions.NEW_GAME:
      return Game.INITIAL_STATE;
    default:
      return state;
  }
}
