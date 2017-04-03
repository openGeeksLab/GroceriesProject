import {createStore} from 'redux';
import reducer from '../reducer';

var defaultState = {
  // newlists: []
  fontSize: 20,
  fontFamily: 'AmericanTypewriter',
};

exports.configureStore = (initialState=defaultState) => {
  var store = createStore(reducer, initialState);
  return store;
}
