
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
// import { LIST_ICON, CART_ICON, } from 'AppIcons';

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
              <Image style={styles.imageFooter} resizeMode={'contain'} source={require('img/list_icon_inactive.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpacityFooter}>
              <Image style={styles.imageFooter} source={require('img/cart_icon_inactive.png')}/>
            </TouchableOpacity>
          </View>
    );
  }
}
