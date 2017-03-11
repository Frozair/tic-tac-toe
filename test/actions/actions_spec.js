import { fromJS } from 'immutable';
import { expect } from 'chai';

import * as actions from '../../src/actions/actions';

describe('Actions', () => {
  describe('START_GAME', () => {
    it('creates a START_GAME action', () => {
      expect(actions.startGame()).to.deep.equal({
        type: 'START_GAME',
        game: {
          grid: '---------',
          nextPlayer: 'O'
        }
      })
    })
  })

  describe('MOVE', () => {
    it('creates a MOVE action', () => {
      expect(actions.move()).to.equal({
        type: 'MOVE'
      });
    })

    it('creates a WINNER action', () => {
      expect(actions.move()).to.equal({
        type: 'WINNER'
      })
    })
  })
});
