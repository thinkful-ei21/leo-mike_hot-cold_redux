import{  MAKE_GUESS } from "../actions/index";

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
    return ({
      ...state,
      guesses: [...state.guesses, action.guess]
    })
  } 

  return state
}

export default makeGuessReducer;