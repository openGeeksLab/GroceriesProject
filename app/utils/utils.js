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

export const getFontFamilyFromName = (fontFamily) => {
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
    case 'DIN Alternate':
      return DIN_Alternate;
    case 'Gill Sans':
      return gillsans;
    case 'AvenirNext-Regular':
        return AvenirNext_Regular;
    default:
      return AmericanTypewriter;
  }
}

export const getColor = (colorName) => {
  color = {
    color: 'black',
    backgroundColor: '#f8eac9',
  };
  switch (colorName) {
    case 'Watermelon Red':
      color = {
        color: 'white',
        backgroundColor: '#d12c56'
      };
      return color;
    case 'Popcorn White':
      return color;
    default:
      return color;
  }
}
