import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  AsyncStorage,
  StatusBar,
  Platform,
  Animated,
} from 'react-native';
import { TUTORIAL_ICON, LIFEBUOY_ICON, STAR_ICON, ARROW_ICON, SELECTED_ICON } from 'AppIcons';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import uiTheme from 'AppTheme';
import { connect } from 'react-redux';
import { setFontFamily, setFontSize, setTheme } from '../actions/settings-actions';
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
import { getFontFamilyFromName, getColor } from '../utils/utils';

import styles from '../styles/settings-styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const listTheme = [
  {name: 'Watermelon Red'},{name: 'Lettuce Green'},{name: 'Popcorn White'},
  {name: 'Fresh Aqua Blue'},{name: 'Teflon Grey'},{name: 'Banana Yellow'},
];

const listFonts = [
  {name: 'HelveticaNeue'},{name: 'Georgia'},{name: 'Ionicons'},
  {name: 'AmericanTypewriter'},{name: 'Cochin'},{name: 'Times New Roman'},
  {name: 'DIN Alternate'},{name: 'Gill Sans'},{name: 'AvenirNext-Regular'},
];

class Settings extends Component {
  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    this.setState({
      fontSize: props.fontSize,
      fontFamily: props.fontFamily,
      theme: props.theme,
    })
  }

  state = {
    theme: this.props.theme,
    openTheme: false,
    openFont: false,
    fontSize: this.props.fontSize,
    fontFamily: this.props.fontFamily,
    alphabeticalSort: false,
    cloudSync: false,
    spinValueFont: new Animated.Value(0),
    spinValueTheme: new Animated.Value(0),
  }

  spinTheme (toValue) {
  	Animated.timing(
    	this.state.spinValueTheme,
      {
      	toValue,
        duration: 500,
      }
    ).start()
  }

  spinFont (toValue) {
  	Animated.timing(
    	this.state.spinValueFont,
      {
      	toValue,
        duration: 500,
      }
    ).start()
  }

  openListTheme = () => {
    this.setState({
      openTheme: !this.state.openTheme,
    });
    this.spinTheme(!this.state.openTheme ? 1 : 0);
  }

  openListFont = () => {
    this.setState({
      openFont: !this.state.openFont,
    });
    this.spinFont(!this.state.openFont ? 1 : 0);
  }

  onDonePress = () => {
    this.props.dispatch(setFontSize(this.state.fontSize));
    this.props.dispatch(setFontFamily(this.state.fontFamily));
    this.props.dispatch(setTheme(this.state.theme));
    AsyncStorage.setItem('state', JSON.stringify(this.state));
    this.props.navigator.pop();
  }

  onCancelPress = () => {
    this.props.navigator.pop();
  }

  incrementFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 1,
    });
  }

  decrementFont = () => {
    this.setState({
      fontSize: this.state.fontSize - 1,
    })
  }

  renderListTheme = (item, index) => {
    const { fontSize, fontFamily, theme } = this.state;

    return (
      <View
        key={index}
        style={[styles.viewListTheme, {
          backgroundColor: getColor(item.name).backgroundColor,
        }]}
      >
        <TouchableOpacity
          onPress={() => {this.selectTheme(index)}}
          style={[styles.touchableOpacityListTheme, {
            paddingLeft: item.name === this.state.theme ? 10 : 15,
          }]}
        >
          <View style={styles.viewTextNameTheme}>
            <Text
              style={{fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(item.name).color }}
            >
              {item.name}
            </Text>
          </View>
          {
            item.name === this.state.theme
            &&
            <View style={styles.viewImageList}>
              <Image source={SELECTED_ICON}/>
            </View>
          }
        </TouchableOpacity>
      </View>
    );
  }

  renderListFonts = (item, index) => {
    const { fontSize, fontFamily, theme} = this.state;
    return (
      <View
        key={index}
        style={[styles.viewListFont, {
          backgroundColor: getColor(theme).backgroundColor,
        }]}
      >
        <TouchableOpacity
          style={[styles.touchableOpacityListFont, {
            paddingLeft: item.name === this.state.fontFamily ? 8 : 15,
          }]}
          onPress={() => {this.selectFont(index)}}
        >
          <View style={styles.viewTextNameFont}>
            <Text
              style={{fontFamily: getFontFamilyFromName(item.name), fontSize, color: getColor(theme).color }}
            >
              {item.name}
            </Text>
          </View>
          {
            item.name === this.state.fontFamily
            &&
            <View style={styles.viewImageList}>
              <Image source={SELECTED_ICON}/>
            </View>
          }
        </TouchableOpacity>
      </View>
    );
  }

  selectFont = (index) => {
    var selectFontMas = listFonts;
    this.setState({
      fontFamily: selectFontMas[index].name,
    })
  }

  selectTheme = (index) => {
    this.setState({
      theme: listTheme[index].name,
    })
  }

  render() {
    const { fontSize, fontFamily, theme } = this.state;
    const spinTheme = this.state.spinValueTheme.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg']
    });
    const spinFont = this.state.spinValueFont.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg']
    });
    return (
      <View style={[styles.container, { backgroundColor: getColor(theme).backgroundColor }]}>
        <Header color={getColor(theme).colorHeaderAndFooter} leftText={'Cancel'} leftAction={() => {this.onCancelPress()}} rightAction={() => {this.onDonePress()}} rightText={'Done'} title={'Settings'} fontSize={fontSize} />
        <ScrollView>
          <View style={{ backgroundColor: getColor(theme).backgroundColor }}>
            <View style={styles.viewThemeLine}>
              <TouchableOpacity
                onPress={() => {this.openListTheme()}}
                style={styles.touchableOpacityTheme}
              >
                <View style={styles.viewTextThemeFlex35}>
                  <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color }}>
                    Theme
                  </Text>
                </View>
                <View style={styles.viewTextChoosedNameTheme}>
                  <View style={styles.viewTextChoosedNameThemeFlexDirection}>
                    <Text style={{ fontSize, fontFamily: getFontFamilyFromName(fontFamily), color: getColor(theme).color }}>
                      {this.state.theme}
                    </Text>
                    <Animated.View style={[styles.animatedViewArrow, {  transform: [{rotate: spinTheme}], }]}>
                      <Animated.Image style={styles.imageArrow} source={ARROW_ICON}/>
                    </Animated.View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.openTheme && listTheme.map((item, index) => {return(this.renderListTheme(item, index))})}
          </View>

          <View style={{ backgroundColor: getColor(theme).backgroundColor }}>
            <View style={styles.viewFontLine}>
              <TouchableOpacity
                onPress={() => {this.openListFont()}}
                style={styles.touchableOpacityFont}
              >
                <View style={styles.viewTextFontFlex25}>
                  <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color }}>
                    Font
                  </Text>
                </View>
                <View style={styles.viewTextChoosedNameFont}>
                  <View style={styles.viewTextChoosedNameFontFlexDirection}>
                    <Text
                      style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color }}
                    >
                      {this.state.fontFamily}
                    </Text>
                    <Animated.View style={[styles.animatedViewArrow, {transform: [{rotate: spinFont}] }]}>
                      <Animated.Image style={styles.imageArrow} source={ARROW_ICON}/>
                    </Animated.View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.openFont && listFonts.map((item, index) => {return(this.renderListFonts(item, index))})}
          </View>

          <View style={{ width, backgroundColor: getColor(theme).backgroundColor, }}>
            <View style={styles.viewFontSizeLine}>
              <View
                style={styles.viewFontSizeFlexDirection}
              >
                <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color }}>
                  Font Size
                </Text>
                <View style={styles.viewButtonsChangeFontSize}>
                  <View style={styles.viewButtonsChangeFontSizeFlexDirection}>
                    <TouchableOpacity
                      disabled={fontSize < 13}
                      onPress={() => {this.decrementFont()}}
                      style={[styles.touchableOpacityChangeFontSizeMinus, {
                        borderColor: fontSize < 13 ? 'grey' : getColor(theme).colorButtons,
                      }]}
                    >
                      <Text
                        style={[styles.textChangeFontSizeButton, {
                          color: fontSize < 13 ? 'grey' : getColor(theme).colorButtons,
                        }]}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={fontSize > 20}
                      onPress={() => {this.incrementFont()}}
                      style={[styles.touchableOpacityChangeFontSizePlus, {
                        borderColor: fontSize > 20 ? 'grey' : getColor(theme).colorButtons,
                      }]}
                    >
                      <Text
                        style={[styles.textChangeFontSizeButton, {
                          color: fontSize > 20 ? 'grey' : getColor(theme).colorButtons,
                        }]}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.viewAlphabeticalSort, {backgroundColor: getColor(theme).backgroundColor}]}>
            <View
              style={styles.viewAlphabeticalSortFlexDirection}
            >
              <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color }}>
                Alphabetical Sort
              </Text>
              <View style={styles.viewSwitch}>
                <Switch
                  onValueChange={(value) => this.setState({alphabeticalSort: value})}
                  value={this.state.alphabeticalSort}
                />
              </View>
            </View>
          </View>


          <View style={[styles.viewPremiumFeatures, {backgroundColor: getColor(theme).backgroundColor}]}>
            <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color }}>
              Premium Features
            </Text>
          </View>
          <View style={[styles.viewUnlockExtraFeatures, { backgroundColor: getColor(theme).backgroundColor }]}>
            <View
              style={styles.viewUnlockExtraFeaturesFlexDirection}
            >
              <View style={styles.viewUnlockExtraFeaturesFlex55}>
                <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color}}>
                  Unlock extra features
                </Text>
              </View>
              <View style={styles.viewGoPremiumButtonFlex45}>
                <TouchableOpacity style={[styles.touchableOpacityGoPremium, { borderColor: getColor(theme).colorButtons, }]}>
                  <Text style={[styles.textButtonGoPremium, { fontFamily: getFontFamilyFromName(fontFamily), color: getColor(theme).colorButtons }]}>
                    Go Premium
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.viewCloudSync, {  backgroundColor: getColor(theme).backgroundColor,  }]}>
            <View
              style={styles.viewCloudSyncFlexDirection}
            >
              <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, color: getColor(theme).color}}>
                Cloud Sync
              </Text>
              <View style={styles.viewSwitch}>
                <Switch
                  onValueChange={(value) => this.setState({cloudSync: value})}
                  value={this.state.cloudSync}
                />
              </View>
            </View>
          </View>

        </ScrollView>
        <Footer leftIcon={TUTORIAL_ICON} centerIcon={LIFEBUOY_ICON} tintColor={getColor(theme).colorHeaderAndFooter} rightIcon={STAR_ICON} />
    </View>
    );
  }
}

mapStatetoProps = (state) => {
  return {
    fontFamily: state.settings.fontFamily,
    fontSize: state.settings.fontSize,
    theme: state.settings.theme,
  }
}

export default connect(mapStatetoProps)(Settings);
