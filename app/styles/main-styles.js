import { StyleSheet, Platform, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex:1,
    width,
    ...Platform.select({
      ios:{
        marginTop: 26,
        height: (height - 26),
      },
      android:{}
    }),
  },
  viewActivityIndicator: {
    width,
    ...Platform.select({
      ios:{
        height: (height - 136),
      },
      android: {
        height: (height - 110),
      },
    }),
    flex: 1,
    justifyContent: 'center',
  },
  viewListItem: {
    width,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
  },
  touchableOpacityListItemFlexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewImageFlex5: {
    justifyContent: 'center',
    flex: 0.05,
  },
  viewListItemNameFlex95: {
    flex: 0.95,
    paddingRight: 10,
  },
  imageArrow: {
    width: 12,
    height: 20,
  },
});

export default styles;
