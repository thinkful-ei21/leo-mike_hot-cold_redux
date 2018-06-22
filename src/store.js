import { createStore } from 'redux';
import makeGuessReducer from './reducers/makeGuessReducer';

const store = createStore(makeGuessReducer);

export default store