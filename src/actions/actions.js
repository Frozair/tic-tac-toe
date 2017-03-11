export function startGame() {
  return {
    type: 'START_GAME',
    game: {
      grid: '---------',
      nextPlayer: 'O'
    }
  };
}
