import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { SETTINGS_ICON, EDIT_ICON, CART_INACTIVE_ICON, LIST_INACTIVE_ICON  } from 'AppIcons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/main-styles';
import { getFontFamilyFromName, getColor } from '../utils/utils';
import {
  HelveticaNeue,
  Georgia,
  Ionicons,
  AmericanTypewriter,
  Cochin,
  times,
  DIN_Alternate,
  gillsans,
  AvenirNext_Regular,
} from 'AppFonts';

export default class Main extends Component {
  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  }

  render() {
    const main = this.context.uiTheme && this.context.uiTheme.main;
    const { fontSize, fontFamily, theme } = this.props;
    return (
      <View style={styles.container}>
        <Header
          color={getColor(theme).colorHeaderAndFooter}
          tintColor={getColor(theme).colorHeaderAndFooter}
          leftIcon={SETTINGS_ICON}
          leftAction={() => { this.props.navigator.push({ title: 'Settings' }) }}
          rightAction={() => {console.warn('MAIN')}}
          rightIcon={EDIT_ICON}
          title={'Lists'}
          fontSize={fontSize}
          fontFamily={fontFamily}
        />
        <ScrollView>
        </ScrollView>
        <Footer
          tintColor={getColor(theme).colorHeaderAndFooter}
          rightIcon={CART_INACTIVE_ICON}
          leftIcon={LIST_INACTIVE_ICON}
        />
      </View>
    );
  }
}

var mapStatetoProps = (state) => {
  return {
    fontSize: state.settings.fontSize,
    fontFamily: state.settings.fontFamily,
    theme: state.settings.theme,
  }
}

module.exports = connect(mapStatetoProps)(Main);
