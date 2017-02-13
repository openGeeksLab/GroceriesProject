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
} from 'react-native';
import { TUTORIAL_ICON, LIFEBUOY_ICON, STAR_ICON, ARROW_ICON, SELECTED_ICON } from 'AppIcons';
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
    cloudSync: false,
    masFonts: listFonts,
    masTheme: listTheme,
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
    return ( this.state.masTheme.map((items, index) =>
      <View style={{ width, paddingTop: 10, paddingBottom: 10,  borderBottomWidth: 1, paddingHorizontal: 15, borderColor: '#c8c7cc', }}>
        <Text
          style={{ fontFamily, fontSize: 18, }}
        >
          {items.name}
        </Text>
      </View>
    ));
  }

  renderListFonts = () => {
    const fontFamily = this.context.uiTheme.fontFamilyAmericanTypewriter.fontFamily;
    return ( this.state.masFonts.map((items, index) =>
      <View style={{ width, paddingTop: 10, flexDirection: 'row', paddingBottom: 10,  borderBottomWidth: 1, paddingHorizontal: 15, borderColor: '#c8c7cc', }}>
        <Text
          onPress={() => {this.selectFont(index)}}
          style={{ fontFamily, fontSize: 18, }}
        >
          {items.name}
        </Text>
        {
          items.selected
          &&
          <View>
            <Image source={SELECTED_ICON}/>
          </View>
        }
      </View>
    ));
  }

  selectFont = (index) => {
    var selectFontMas = this.state.masFonts;
    selectFontMas[index].selected = true;
    this.setState({
      masFonts: selectFontMas,
    });
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
    return (
      <View style={styles.container}>
        <Header leftText={'Cancel'} leftAction={() => {this.props.navigator.pop()}} rightAction={() => {this.props.navigator.pop()}} rightText={'Done'} title={'Settings'} />
        <ScrollView style={{ flex: 1, }}>
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
                    <Text
                      style={{ fontSize: 20, paddingRight: 10, }}
                    >
                      {this.state.nameFont}
                    </Text>
                    <Image style={{ height: 20, width: 10, transform: [{rotate: this.state.openFont ? '90deg' : '0deg'}], }} source={ARROW_ICON}/>
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


          <View style={{ width, height: 60, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
            <Text style={{ fontFamily: fontFamily, fontSize: 20, }}>
              Premium Features
            </Text>
          </View>

          <View style={{ width, }}>
            <View style={{ width, height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <View
                style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Text style={{ fontFamily: fontFamily, fontSize: 20,}}>
                  Unlock extra features
                </Text>
                <TouchableOpacity style={{ justifyContent: 'center', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 2 }}>
                  <Text style={{ fontFamily, fontSize: 20, }}>
                    Go Premium
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ width, }}>
            <View style={{ width, height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <View
                style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Text style={{ fontFamily: fontFamily, fontSize: 20,}}>
                  Cloud Sync
                </Text>
                <View style={{ justifyContent: 'center',}}>
                  <Switch
                    onValueChange={(value) => this.setState({cloudSync: value})}
                    value={this.state.cloudSync}
                  />
                </View>
              </View>
            </View>
          </View>

        </ScrollView>
        <Footer leftIcon={TUTORIAL_ICON} centerIcon={LIFEBUOY_ICON} rightIcon={STAR_ICON} />
    </View>
    );
  }
}

module.exports = Settings;
