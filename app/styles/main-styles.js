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
});

export default styles;
