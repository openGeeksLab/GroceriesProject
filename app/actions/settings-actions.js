import { AsyncStorage } from 'react-native';

export const actionTypes = {
  CHANGE_FONT_FAMILY: 'CHANGE_FONT_FAMILY',
  SET_FONT_FAMILY: 'SET_FONT_FAMILY',
  INCREMENT_FONT: 'INCREMENT_FONT',
  DECREMENT_FONT: 'DECREMENT_FONT',
  GET_FONT_SIZE: 'GET_FONT_SIZE',
  SET_FONT_SIZE: 'SET_FONT_SIZE',
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

export const getFontSize = () =>
  (dispatch) => {
    AsyncStorage.getItem('fontSize').then(fontSize => {
      if (fontSize) {
        dispatch({
          type: actionTypes.GET_FONT_SIZE,
          fontSize: JSON.parse(fontSize),
        });
      }
    });
  }

export const setFontSize = (fontSize) =>
  (dispatch) => {
    AsyncStorage.setItem('fontSize', JSON.stringify(fontSize));
    dispatch({
      type: actionsTypes.SET_FONT_SIZE,
      fontSize: fontSize
    })
  }

// export const incrementFont = () =>
//   (dispatch) => {
//     dispatch({
//       type: actionTypes.INCREMENT_FONT,
//     })
//   }
//
// export const decrementFont = () =>
//   (dispatch) => {
//     dispatch({
//       type: actionTypes.DECREMENT_FONT,
//     })
//   }
