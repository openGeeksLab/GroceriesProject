import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TUTORIAL_ICON, LIFEBUOY_ICON, STAR_ICON } from 'AppIcons';
import Header from './Header';
import Footer from './Footer';

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
        <Footer leftIcon={TUTORIAL_ICON} centerIcon={LIFEBUOY_ICON} rightIcon={STAR_ICON} />
    </View>
    );
  }
}

module.exports = Settings;
