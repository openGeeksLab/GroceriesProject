import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Switch,
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

const listTheme = [
  {
    name: 'Watermelon Red',
    selected: false,
  },
  {
    name: 'Lettuce Green',
    selected: false,
  },
  {
    name: 'Popcorn White',
    selected: false,
  },
  {
    name: 'Fresh Aqua Blue',
    selected: false,
  },
  {
    name: 'Teflon Grey',
    selected: false,
  },
  {
    name: 'Banana Yellow',
    selected: false,
  },
];
const listFonts = [
  {
    name: 'HelveticaNeue',
    selected: false,
  },
  {
    name: 'Georgia',
    selected: false,
  },
  {
    name: 'Ionicons',
    selected: false,
  },
  {
    name: 'AmericanTypewriter',
    selected: false,
  },
  {
    name: 'Cochin',
    selected: false,
  },
  {
    name: 'Times New Roman',
    selected: false,
  },
  {
    name: 'DIN Alternate',
    selected: false,
  },
  {
    name: 'Gill Sans',
    selected: false,
  },
  {
    name: 'AvenirNext-Regular',
    selected: false,
  },
];

class Settings extends Component {
  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  }

  state = {
    nameTheme: 'Watermelon Red',
    openTheme: false,
    nameFont: 'AmericanTypewriter',
    openFont: false,
    fontSize: 20,
    alphabeticalSort: false,
  }

  openListTheme = () => {
    this.setState({
      openTheme: true,
      openFont: false,
    });
  }

  openListFont = () => {
    this.setState({
      openFont: true,
      openTheme: false,
    });
  }

  renderListTheme = () => {
    const fontFamily = this.context.uiTheme.fontFamilyAmericanTypewriter.fontFamily;
    return ( listTheme.map((items, index) =>
      <View style={{ width, paddingTop: 10, paddingBottom: 10,  borderBottomWidth: 1, paddingHorizontal: 15, borderColor: '#c8c7cc', }}>
        <Text style={{ fontFamily, fontSize: 18, }} >
          {items.name}
        </Text>
      </View>
    ));
  }

  renderListFonts = () => {
    const fontFamily = this.context.uiTheme.fontFamilyAmericanTypewriter.fontFamily;
    return ( listFonts.map((items, index) =>
      <View style={{ width, paddingTop: 10, paddingBottom: 10,  borderBottomWidth: 1, paddingHorizontal: 15, borderColor: '#c8c7cc', }}>
        <Text style={{ fontFamily, fontSize: 18, }} >
          {items.name}
        </Text>
      </View>
    ));
  }

  incrementFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    });
  }

  decrementFont = () => {
    this.setState({
      fontSize: this.state.fontSize - 1
    });
  }

  render() {
    const fontFamily = this.context.uiTheme.fontFamilyAmericanTypewriter.fontFamily;
    console.warn(this.state.fontSize);
    return (
      <View style={styles.container}>
        <Header leftText={'Cancel'} leftAction={() => {this.props.navigator.pop()}} rightAction={() => {this.props.navigator.pop()}} rightText={'Done'} title={'Settings'} />
        <View style={{ flex: 1, }}>
          <View style={{ width, }}>
            <View style={{ width, height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <TouchableOpacity
                onPress={() => {this.openListTheme()}}
                style={{ width, flexDirection: 'row', justifyContent: 'space-between', }}
              >
                <Text style={{ fontFamily: fontFamily, fontSize: 20 }}>
                  Theme
                </Text>
                <View style={{ justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, paddingRight: 10, }}>
                      {this.state.nameTheme}
                    </Text>
                    <Image style={{ height: 20, width: 10, transform: [{rotate: this.state.openTheme ? '90deg' : '0deg'}], }} source={ARROW_ICON}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.openTheme ? this.renderListTheme() : null}
          </View>

          <View style={{ width, }}>
            <View style={{ width, height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <TouchableOpacity
                onPress={() => {this.openListFont()}}
                style={{ width, flexDirection: 'row', justifyContent: 'space-between', }}
              >
                <Text style={{ fontFamily: fontFamily, fontSize: 20 }}>
                  Font
                </Text>
                <View style={{ justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, paddingRight: 10, }}>
                      {this.state.nameFont}
                    </Text>
                    <Image style={{ height: 20, width: 10, transform: [{rotate: this.state.openTheme ? '90deg' : '0deg'}], }} source={ARROW_ICON}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.openFont ? this.renderListFonts() : null}
          </View>

          <View style={{ width, }}>
            <View style={{ width, height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <View
                style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Text style={{ fontFamily: fontFamily, fontSize: 20,}}>
                  Font Size
                </Text>
                <View style={{ justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {this.decrementFont()}}
                      style={{ borderWidth: 1, paddingVertical: 3, paddingHorizontal: 25, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}
                    >
                      <Text style={{ fontSize: 20,}}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {this.incrementFont()}}
                      style={{ borderWidth: 1, paddingVertical: 3, paddingHorizontal: 23, borderTopRightRadius: 10, borderBottomRightRadius: 10, }}
                    >
                      <Text style={{ fontSize: 20, }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ width, }}>
            <View style={{ width, height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <View
                style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Text style={{ fontFamily: fontFamily, fontSize: 20,}}>
                  Alphabetical Sort
                </Text>
                <View style={{ justifyContent: 'center' }}>
                  <Switch
                    onValueChange={(value) => this.setState({alphabeticalSort: value})}
                    value={this.state.alphabeticalSort}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Footer leftIcon={TUTORIAL_ICON} centerIcon={LIFEBUOY_ICON} rightIcon={STAR_ICON} />
    </View>
    );
  }
}

module.exports = Settings;
