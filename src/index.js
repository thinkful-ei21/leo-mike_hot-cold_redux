import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Game from './components/game';


import store from './store';
import { makeGuess, guessOutput, newGame } from './actions';
import makeGuessReducer from './reducers/makeGuessReducer';
// store.dispatch(makeGuess(10));
// store.dispatch(makeGuess(20));
// store.dispatch(makeGuess(50));
// store.dispatch(makeGuess(60));
store.dispatch(newGame());

console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
