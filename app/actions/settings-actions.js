import { AsyncStorage } from 'react-native';

export const actionTypes = {
  CHANGE_FONT_FAMILY: 'CHANGE_FONT_FAMILY',
  SET_FONT_FAMILY: 'SET_FONT_FAMILY',
};

export const setFontFamily = () =>
  (dispatch) => {
    AsyncStorage.getItem('fontFamily').then(fontFamily => {
      if (fontFamily) {
        dispatch({
          type: actionTypes.SET_FONT_FAMILY,
          fontFamily: JSON.parse(fontFamily),
        })
      }
    })
  }

export const changeFontFamily = (fontFamily) =>
  (dispatch) => {
    AsyncStorage.setItem('fontFamily', JSON.stringify(fontFamily));
    dispatch({
      type: actionTypes.CHANGE_FONT_FAMILY,
      fontFamily,
    });
  };
