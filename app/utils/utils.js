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
