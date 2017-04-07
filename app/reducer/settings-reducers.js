import { actionTypes } from '../actions/settings-actions';
import { AsyncStorage } from 'react-native';

const initialState = {
  theme: 'Popcorn White',
  fontFamily: 'AmericanTypewriter',
  fontSize: 16,
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
    case actionTypes.GET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize
      }
    case actionTypes.SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.fontSize,
      }
    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      }
    case actionTypes.GET_THEME:
      return {
        ...state,
        theme: action.theme
      }
    // case actionTypes.CLEAR_SETTINGS_INITIAL:
    //   return {
    //     ...initialState,
    //   }
    default:
      return state;
  }
}
