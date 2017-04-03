// const GREEN = '';
import { AsyncStorage } from 'react-native';

import {
  HelveticaNeue,
  Georgia,
  Ionicons,
  AmericanTypewriter,
  Cochin,
  times,
  DIN_Alternate,
  gillsans,
  AvenirNext_Regular,
} from 'AppFonts';

setFontFamily = () => {
  fontFamily = AsyncStorage.getItem('fontFamily');
  switch (fontFamily) {
    case 'HelveticaNeue':
      return HelveticaNeue;
    case 'Georgia':
      return Georgia;
    case 'Ionicons':
      return Ionicons;
    case 'AmericanTypewriter':
      return AmericanTypewriter;
    case 'Cochin':
      return Cochin;
    case 'times':
      return times;
    case 'DIN_Alternate':
      return DIN_Alternate;
    case 'gillsans':
      return gillsans;
    case 'AvenirNext_Regular':
        return AvenirNext_Regular;
    default:
      return AmericanTypewriter;

  }
}

export const uiTheme ={
  palette: {
    backgroundColor: 'red',
    color: 'yellow',
  },
  toolbar: {
    container: {
      alignItems: 'flex-end',
      height: 70,
    },
  },
  additional: {
    fontFamily: {
      fontFamily: setFontFamily(),
    },
    red: {
      themeColor: '#FF6385',
      color: '#E6E6E6',
    },
  },
};
