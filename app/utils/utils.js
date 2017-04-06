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
    backgroundColor: '#ffffff',
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
    case 'Lettuce Green':
      color = {
        color: 'white',
        backgroundColor: '#70b226',
      };
      return color;
    case 'Teflon Grey':
      color = {
        color: '#d3d3d3',
        backgroundColor: '#323232'
      };
      return color;
    case 'Fresh Aqua Blue':
      color = {
        color: 'white',
        backgroundColor: '#30c4c9'
      };
      return color;
    case 'Banana Yellow':
      color = {
        color: 'white',
        backgroundColor: '#ffe135'
      };
      return color;
    default:
      return color;
  }
}
