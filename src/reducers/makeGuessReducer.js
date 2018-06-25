import{  MAKE_GUESS, NEW_GAME } from "../actions/index";

// Job: is to update the state when an action happens.
// It is managing the state that lives in the store

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

const makeGuessReducer = (state = initialState, action) => {


  if(action.type === MAKE_GUESS) {
    let feedback;
    let guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
       feedback= 'Please enter a valid number' ;
      return ({
        ...state
       , guesses: [...state.guesses, guess],
       feedback
      });
    }

    const difference = Math.abs(guess - state.correctAnswer);
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    return ({
      ...state
     , guesses: [...state.guesses, action.guess],
     feedback
    })
  }

  if(action.type === NEW_GAME) {
    return ({
      ...state
    })
  }


  return state
}

export default makeGuessReducer;