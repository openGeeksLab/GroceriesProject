
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
          <View style={styles.footer}>
            <TouchableOpacity style={{width: 35, height: 35}}>
              <Image style={{width: 25, height: 25}} source={{uri: 'list_icon_active.png'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 25, height: 25, marginBottom: 10}}>
              <Image style={{width: 35, height: 25}} source={{uri: 'cart_icon_inactive.png'}}/>
            </TouchableOpacity>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    alignItems:'flex-end',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
  },
});

module.exports = Footer;
