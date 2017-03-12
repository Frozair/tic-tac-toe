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
      const meta = {
        grid: '---------',
        player: {
          type: 'O',
          position: 3
        }
      };

      expect(actions.move(meta)).to.deep.equal({
        type: 'MOVE',
        game: {
          grid: '---------',
          player: {
            type: 'O',
            position: 3
          }
        }
      });
    })
  })
});
