
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
            <View style={styles.header}>
              <TouchableOpacity>
                <Image style={{width: 20, height: 20}} source={{uri: 'settings.png'}}/>
              </TouchableOpacity>
              <Text style={{fontSize:20}}>
                Groceries
              </Text>
              <TouchableOpacity>
                <Image style={{width: 20, height: 20}} source={{uri: 'edit.png'}}/>
              </TouchableOpacity>
            </View>

    );
  }
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

module.exports = Header;
