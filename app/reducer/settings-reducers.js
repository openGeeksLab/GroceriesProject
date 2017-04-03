import { actionTypes } from '../actions/settings-actions';

// const initialState = {
//
// };

export default function AppReducers(state, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    default:
      return state;
  }
}
