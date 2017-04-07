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
});

export default styles;
