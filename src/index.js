import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Game from './components/game';


import store from './store';
console.log(store.getState);

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
