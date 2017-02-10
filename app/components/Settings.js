import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Header from './Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header leftText={SETTINGS_ICON} rightIcon={EDIT_ICON} title={'Lists'} />
      </View>
    );
  }
}

module.exports = Settings;
