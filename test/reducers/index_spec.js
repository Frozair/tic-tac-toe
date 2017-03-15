import { expect } from 'chai';
import { fromJS, Map } from 'immutable';

import reducer from '../../src/reducers/index';
import * as Actions from '../../src/actions/actions'
import * as Game from '../../src/constants/Game';

describe('Reducer', () => {
  describe('newGame', () => {
    it('sets the state to the game INITIAL_STATE', () => {
      const initialState = Map();
      const action = Actions.newGame();
      const nextState = reducer(initialState, action);

      expect(nextState).to.deep.equal(fromJS(Game.INITIAL_STATE));
    })
  })

  describe('move', () => {
    it('marks the player in the cell on the grid', () => {
      const state = fromJS(Game.INITIAL_STATE);
      const player = {
        type: Game.PLAYER_O,
        position: 2
      };
      const action = Actions.move(player);
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        grid: '--O------',
        nextPlayer: 'X'
      }));
    })

    it('does not mark the player if the cell is occupied', () => {
      const state = fromJS({
        grid: 'O--------',
        nextPlayer: Game.PLAYER_X
      });
      const player = {
        type: Game.PLAYER_X,
        position: 0
      };
      const action = Actions.move(player);
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        grid: 'O--------',
        nextPlayer: Game.PLAYER_X
      }));
    })

    it('declares that there is a winner', () => {
      const state = fromJS({
        grid: 'OO-XX----',
        nextPlayer: Game.PLAYER_O
      });
      const player = {
        type: Game.PLAYER_O,
        position: 2
      };
      const action = Actions.move(player);
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        cells: [0, 1, 2],
        winner: Game.PLAYER_O
      }));
    })

    it('declares that there is a draw', () => {
      const state = fromJS({
        grid: 'OOXXXOOX-',
        nextPlayer: Game.PLAYER_O
      });
      const player = {
        type: Game.PLAYER_O,
        position: 8
      };
      const action = Actions.move(player);
      const nextState = reducer(state, action);

      expect(nextState).to.equal(fromJS({
        isDraw: true
      }));
    })
  })
});
