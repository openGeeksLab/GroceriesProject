import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios:{
        marginTop: 26,
        height: (height - 26),
      },
      android:{}
    }),
    width,
  },
  viewListTheme: {
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  touchableOpacityListTheme: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  viewTextNameTheme: {
    height: 40,
    justifyContent: 'center',
  },
  viewImageList: {
    justifyContent: 'center'
  },
  viewListFont: {
    width,
    borderColor: '#c8c7cc',
    borderBottomWidth: 1,
  },
  touchableOpacityListFont: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  viewTextNameFont: {
    height: 40,
    justifyContent: 'center',
  },
  viewThemeLine: {
    width,
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  touchableOpacityTheme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTextThemeFlex35: {
    flex: 0.35,
  },
  viewTextChoosedNameTheme: {
    flex: 0.65,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  viewTextChoosedNameThemeFlexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animatedViewArrow: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageArrow: {
    height: 20,
    width: 12,
  },
  viewFontLine: {
    width,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  touchableOpacityFont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTextFontFlex25: {
    flex: 0.25,
  },
  viewTextChoosedNameFont: {
    flex: 0.75,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  viewTextChoosedNameFontFlexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewFontSizeLine: {
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  viewFontSizeFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewButtonsChangeFontSize: {
    justifyContent: 'center',
  },
  viewButtonsChangeFontSizeFlexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableOpacityChangeFontSizeMinus: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  touchableOpacityChangeFontSizePlus: {
    borderWidth: 1,
    marginLeft: -1,
    paddingVertical: 5,
    paddingHorizontal: 23,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  textChangeFontSizeButton: {
    fontSize: 20,
  },
  viewAlphabeticalSort: {
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  viewAlphabeticalSortFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewSwitch: {
    justifyContent: 'center',
  },

  viewPremiumFeatures: {
    width,
    height: 60,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  viewUnlockExtraFeatures: {
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  viewUnlockExtraFeaturesFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewUnlockExtraFeaturesFlex55: {
    flex: 0.55,
  },
  viewGoPremiumButtonFlex45: {
    flex: 0.45,
  },
  touchableOpacityGoPremium: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  textButtonGoPremium: {
    textAlign: 'center',
    fontSize: 18,
  },
  viewCloudSync: {
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  viewCloudSyncFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
