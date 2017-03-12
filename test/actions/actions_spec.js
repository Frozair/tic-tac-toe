import { expect } from 'chai';

import * as Actions from '../../src/actions/actions';

describe('Actions', () => {
  describe('START_GAME', () => {
    it('creates a START_GAME action', () => {
      expect(Actions.startGame()).to.deep.equal({
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

      expect(Actions.move(meta)).to.deep.equal({
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
