
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LIST_INACTIVE_ICON, CART_INACTIVE_ICON, } from 'AppIcons';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
  },
  touchOpacityFooter: {
    width: 50,
    height: 25,
  },
  imageFooter: {
    width: 35,
    height: 25,
  },
});


export default class Footer extends Component {
  render() {
    return (
          <View style={styles.footer}>
            <TouchableOpacity style={styles.touchOpacityFooter}>
              <Image style={styles.imageFooter} resizeMode={'contain'} source={LIST_INACTIVE_ICON}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpacityFooter}>
              <Image style={styles.imageFooter} source={CART_INACTIVE_ICON}/>
            </TouchableOpacity>
          </View>
    );
  }
}
