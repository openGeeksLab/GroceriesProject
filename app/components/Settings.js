import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Header from './Header';

const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
});

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header leftText={'Cancel'} leftAction={() => {this.props.navigator.pop()}} rightAction={() => {this.props.navigator.pop()}} rightText={'Done'} title={'Settings'} />
        <View style={{ flex: 1 }}>

        </View>
    </View>
    );
  }
}

module.exports = Settings;
