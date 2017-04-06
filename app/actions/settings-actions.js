import { AsyncStorage } from 'react-native';

export const actionTypes = {
  SET_FONT_FAMILY: 'SET_FONT_FAMILY',
  GET_FONT_FAMILY: 'GET_FONT_FAMILY',
  GET_FONT_SIZE: 'GET_FONT_SIZE',
  SET_FONT_SIZE: 'SET_FONT_SIZE',
  // CLEAR_SETTINGS_INITIAL: 'CLEAR_SETTINGS_INITIAL',
  SET_THEME: 'SET_THEME',
  GET_THEME: 'GET_THEME',
};

export const getTheme = () =>
  (dispatch) => {
    AsyncStorage.getItem('state').then(state => {
      const parsedState = JSON.parse(state);
      if (parsedState && parsedState.theme) {
        dispatch({
          type: actionTypes.GET_THEME,
          theme: parsedState.theme,
        })
      }
    })
  }

export const setTheme = (theme) => {
  return {
    type: actionTypes.SET_THEME,
    theme,
  }
}

export const getFontFamily = () =>
  (dispatch) => {
    AsyncStorage.getItem('state').then(state => {
      const parsedState = JSON.parse(state);
      if (parsedState && parsedState.fontFamily) {
        dispatch({
          type: actionTypes.SET_FONT_FAMILY,
          fontFamily: parsedState.fontFamily,
        })
      }
    })
  }

export const setFontFamily = (fontFamily) =>  {
  return {
    type: actionTypes.SET_FONT_FAMILY,
    fontFamily,
  }
}

export const getFontSize = () =>
  (dispatch) => {
    AsyncStorage.getItem('state').then(state => {
      const parsedState = JSON.parse(state);
      if (parsedState && parsedState.fontSize) {
        dispatch({
          type: actionTypes.GET_FONT_SIZE,
          fontSize: parsedState.fontSize,
        });
      }
    });
  }

export const setFontSize = (fontSize) => {
  return {
    type: actionTypes.SET_FONT_SIZE,
    fontSize,
  }
}

// export const clearSettings = () => {
//   // AsyncStorage.getAllKeys((err,keys) => {
//   //   AsyncStorage.multiGet(keys, (err, stores) => {
//   //     stores.map((store, i) => {
//   //       if (store[0] === 'fontSize' || store[0] === 'fontFamily') {
//   //         getFontSize();
//   //         getFontFamily();
//   //       } else {
//   //         return {
//   //           type: actionTypes.CLEAR_SETTINGS_INITIAL,
//   //         };
//   //       }
//   //     });
//   //   });
//   // });
// }
