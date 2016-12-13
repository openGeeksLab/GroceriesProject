
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native';

import Header from './Header';

export default class Main extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Header />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});

module.exports = Main;
