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
    return (
      <View style={styles.container}>
        <Header leftIcon={SETTINGS_ICON} leftAction={() => { this.props.navigator.push({ title: 'Settings' }) }} rightAction={() => {console.warn('MAIN')}} rightIcon={EDIT_ICON} title={'Lists'} />

        <Footer rightIcon={CART_INACTIVE_ICON} leftIcon={LIST_INACTIVE_ICON}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

var mapStatetoProps = (state) => {
  return{
    newlists: state.newlists
  }
}

module.exports = connect(mapStatetoProps)(Main);
