import { actionTypes } from '../actions/settings-actions';
import { AsyncStorage } from 'react-native';

const initialState = {
  fontFamily: 'AmericanTypewriter',
  fontSize: 18,
};

export default function AppReducers(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.CHANGE_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize
      }
    case actionTypes.INCREMENT_FONT:
      AsyncStorage.setItem('fontSize', JSON.stringify(state.fontSize + 1));
      return {
        ...state,
        fontFamily: state.fontSize + 1
      }
    case actionTypes.DECREMENT_FONT:
      AsyncStorage.setItem('fontSize', JSON.stringify(state.fontSize - 1));
      return {
        ...state,
        fontFamily: state.fontSize - 1
      }
    default:
      return state;
  }
}
