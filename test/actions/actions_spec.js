import { expect } from 'chai';

import * as Actions from '../../src/actions/actions';

describe('Actions', () => {
  describe('NEW_GAME', () => {
    it('creates a NEW_GAME action', () => {
      expect(Actions.newGame()).to.deep.equal({
        type: 'NEW_GAME',
        game: {
          grid: '---------',
          nextPlayer: 'O'
        }
      })
    })
  })

  describe('MOVE', () => {
    it('creates a MOVE action', () => {
      const player = {
        type: 'O',
        position: 3
      };

      expect(Actions.move(player)).to.deep.equal({
        type: 'MOVE',
        player: {
          type: 'O',
          position: 3
        }
      });
    })
  })
});
