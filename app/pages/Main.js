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
  ActivityIndicator,
  Image,
} from 'react-native';

import { SETTINGS_ICON, EDIT_ICON, CART_INACTIVE_ICON, ARROW_ICON, LIST_INACTIVE_ICON  } from 'AppIcons';
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

  renderItemList = (item, index) => {
    const { fontSize, fontFamilyName, theme, list } = this.props;
    const backgroundColor = getColor(theme).backgroundColor;
    const color = getColor(theme).color;
    const fontFamily = getFontFamilyFromName(fontFamilyName);
    return (
      <View key={item.id} style={[styles.viewListItem, { backgroundColor }]}>
        <TouchableOpacity style={styles.touchableOpacityListItemFlexDirection}>
          <View style={styles.viewListItemNameFlex95}>
            <Text style={{fontSize, fontFamily, color}}>
              {item.name}
            </Text>
          </View>
          <View style={styles.viewImageFlex5}>
            <Image style={styles.imageArrow} resizeMode={'contain'} source={ARROW_ICON} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const main = this.context.uiTheme && this.context.uiTheme.main;
    const { fontSize, fontFamilyName, theme, list } = this.props;
    const backgroundColor = getColor(theme).backgroundColor;
    const color = getColor(theme).color;
    const fontFamily = getFontFamilyFromName(fontFamilyName);
    return (
      <View style={[styles.container, { backgroundColor } ]}>
        <Header
          color={getColor(theme).colorHeaderAndFooter}
          tintColor={getColor(theme).colorHeaderAndFooter}
          leftIcon={SETTINGS_ICON}
          leftAction={() => { this.props.navigator.push({ title: 'Settings' }) }}
          rightAction={() => {console.warn('MAIN')}}
          rightIcon={EDIT_ICON}
          title={'Lists'}
          fontSize={fontSize}
          fontFamily={fontFamilyName}
        />
        <ScrollView>
          {
            list
            ?
              list.map((item, index) => {
                return(this.renderItemList(item, index))
              })
            :
              <View style={styles.viewActivityIndicator}>
                <ActivityIndicator />
              </View>
          }
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
    fontFamilyName: state.settings.fontFamily,
    theme: state.settings.theme,
    list: state.main.list,
  }
}

module.exports = connect(mapStatetoProps)(Main);
