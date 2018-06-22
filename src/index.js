import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Game from './components/game';


import store from './store';
import { makeGuess } from './actions';
import makeGuessReducer from './reducers/makeGuessReducer';
store.dispatch(makeGuess({guess: 10}));

console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
