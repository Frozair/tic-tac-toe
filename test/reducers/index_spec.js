import { expect } from 'chai';
import { Map } from 'immutable';

import reducer from '../../src/reducers/index';
import * as Actions from '../../src/actions/actions'
import * as Game from '../../src/constants/Game';

describe('Reducer', () => {
  describe('newGame', () => {
    it('sets the state to the game INITIAL_STATE', () => {
      const initialState = Map();
      const action = Actions.newGame();
      const nextState = reducer(initialState, action);

      expect(nextState).to.deep.equal(Game.INITIAL_STATE);
    })
  })
});
