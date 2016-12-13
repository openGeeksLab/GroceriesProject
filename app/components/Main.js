
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Header />
            <ScrollView style={{flex:1,}}>
            </ScrollView>
            <Footer />
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
