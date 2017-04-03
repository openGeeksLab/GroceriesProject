import { AsyncStorage } from 'react-native';

export const actionTypes = {
  CHANGE_FONT_FAMILY: 'CHANGE_FONT_FAMILY',
};

export const changeFontFamily = (fontFamily) => {
  (dispatch) => {
    AsyncStorage.setItem('fontFamily', JSON.stringify(fontFamily));
    dispatch({
      type: actionTypes.CHANGE_FONT_FAMILY,
      fontFamily,
    });
  }
};
