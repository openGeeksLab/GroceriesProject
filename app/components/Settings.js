import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TUTORIAL_ICON, LIFEBUOY_ICON, STAR_ICON, ARROW_ICON } from 'AppIcons';
import Header from './Header';
import Footer from './Footer';
// import uiTheme from 'AppTheme';
import { AmericanTypewriter } from 'AppFonts';

const { width } = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
});

class Settings extends Component {

  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  }

  render() {
    const fontFamily = this.context.uiTheme.fontFamilyAmericanTypewriter.fontFamily;
    return (
      <View style={styles.container}>
        <Header leftText={'Cancel'} leftAction={() => {this.props.navigator.pop()}} rightAction={() => {this.props.navigator.pop()}} rightText={'Done'} title={'Settings'} />
        <View style={{ flex: 1 }}>
          <View style={{ width, }}>
            <View style={{ width, height: 50, justifyContent: 'center' }}>
              <TouchableOpacity style={{ width,flexDirection: 'row', borderWidth: 1, justifyContent: 'space-between'}}>
                <Text style={{ fontFamily: fontFamily, fontSize: 20 }}>
                  Theme
                </Text>
                <View style={{ justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18 }}>
                      Nametheme
                    </Text>
                    <Image style={{ height: 20, width: 10 }} source={ARROW_ICON}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer leftIcon={TUTORIAL_ICON} centerIcon={LIFEBUOY_ICON} rightIcon={STAR_ICON} />
    </View>
    );
  }
}

module.exports = Settings;
