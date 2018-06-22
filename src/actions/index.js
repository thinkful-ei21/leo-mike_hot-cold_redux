// actions descirbe when something has happened
// notifies when a state change is needed

export const MAKE_GUESS = 'MAKE_GUESS';

// action creator method
export const makeGuess = (guess) => {
  return {
    type: MAKE_GUESS,
    guess
  };
}
