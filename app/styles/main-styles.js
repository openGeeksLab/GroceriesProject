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
  viewListItemNameFlex85: {
    flex: 0.85,
    paddingLeft: 5,
    paddingRight: 10,
  },
  imageArrow: {
    width: 12,
    height: 20,
  },
  viewlistItemNameFlexDirectionFlex95: {
    flexDirection: 'row',
    flex: 0.95,
    alignItems: 'center',
  },
  textDelete: {
    marginBottom: 4,
    fontWeight: '500',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  viewDelete: {
    backgroundColor: 'red',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.OS === 'andoird' ? 25 : 12,
  },
});

export default styles;
