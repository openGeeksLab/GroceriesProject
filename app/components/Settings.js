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
} from 'react-native';
import { TUTORIAL_ICON, LIFEBUOY_ICON, STAR_ICON, ARROW_ICON, SELECTED_ICON } from 'AppIcons';
import Header from './Header';
import Footer from './Footer';
// import uiTheme from 'AppTheme';
import { connect } from 'react-redux';
import { setFontFamily, /* setFontSize, */ clearSettings, setFontSize } from '../actions/settings-actions';
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

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
});

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
    })
  }

  state = {
    selectedTheme: 'Popcorn White',
    openTheme: false,
    openFont: false,
    fontSize: this.props.fontSize,
    fontFamily: this.props.fontFamily,
    alphabeticalSort: false,
    cloudSync: false,
  }

  openListTheme = () => {
    this.setState({
      openTheme: !this.state.openTheme,
    });
  }

  openListFont = () => {
    this.setState({
      openFont: !this.state.openFont,
    });
  }

  onDonePress = () => {
    this.props.dispatch(setFontSize(this.state.fontSize));
    this.props.dispatch(setFontFamily(this.state.fontFamily));
    AsyncStorage.setItem('state', JSON.stringify(this.state));
    // AsyncStorage.setItem('fontSize', JSON.stringify(this.props.fontSize));
    // AsyncStorage.setItem('fontFamily', JSON.stringify(this.props.fontFamily));
  }

  onCancelPress = () => {
    // this.props.dispatch(clearSettings())
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
    const { fontSize, fontFamily } = this.state;

    return (
      <View
        key={index}
        style={{
          borderBottomWidth: 1,
          borderColor: '#c8c7cc',
        }}
      >
        <TouchableOpacity
          onPress={() => {this.selectTheme(index)}}
          style={{
            width,
            paddingTop: 10,
            paddingBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: item.name === this.state.fontFamily ? 10 : 15,
            paddingRight: 15,
          }}
        >
          <Text
            style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, }}
          >
            {item.name}
          </Text>
          {
            item.name === this.state.fontFamily
            &&
            <View>
              <Image source={SELECTED_ICON}/>
            </View>
          }
        </TouchableOpacity>
      </View>
    );
  }

  renderListFonts = (item, index) => {
    const { fontSize, fontFamily } = this.state;
    return (
      <View
        key={index}
        style={{
          width,
          borderColor: '#c8c7cc',
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity
          key={index}
          style={{
            width,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: item.name === this.state.fontFamily ? 8 : 15,
            paddingRight: 15,
          }}
          onPress={() => {this.selectFont(index)}}
        >
          <View style={{ height: 40, justifyContent: 'center' }}>
            <Text
              style={{fontFamily: getFontFamilyFromName(fontFamily), fontSize, }}
            >
              {item.name}
            </Text>
          </View>
          {
            item.name === this.state.fontFamily
            &&
            <View style={{ justifyContent: 'center'}}>
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
    // this.props.dispatch(changeFontFamily(selectFontMas[index].name));
  }

  selectTheme = (index) => {
    var selectThemeMas = listTheme;
    for (let i=0;i<selectThemeMas.length;i++){
      if (selectThemeMas[i].selected === true) {
        selectThemeMas[i].selected = false;
      }
    }
    selectThemeMas[index].selected = true;
    this.setState({
      openTheme: false,
      selectedTheme: selectThemeMas[index].name,
    });
  }

  render() {
    const { fontSize, fontFamily } = this.state;
    return (
      <View style={styles.container}>
        <Header leftText={'Cancel'} leftAction={() => {this.onCancelPress()}} rightAction={() => {this.onDonePress()}} rightText={'Done'} title={'Settings'} fontSize={fontSize} />
        <ScrollView>
          <View>
            <View style={{ width, paddingHorizontal: 15, height: 50, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <TouchableOpacity
                onPress={() => {this.openListTheme()}}
                style={{ flexDirection: 'row', justifyContent: 'space-between', }}
              >
                <View style={{ flex: 0.35 }}>
                  <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize }}>
                    Theme
                  </Text>
                </View>
                <View style={{ flex: 0.65, alignItems: 'flex-end', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize, fontFamily: getFontFamilyFromName(fontFamily), paddingRight: 10, }}>
                      {this.state.selectedTheme}
                    </Text>
                    <Image style={{ height: 20, width: 10, transform: [{rotate: this.state.openTheme ? '90deg' : '0deg'}], }} source={ARROW_ICON}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.openTheme && listTheme.map((item, index) => {return(this.renderListTheme(item, index))})}
          </View>

          <View>
            <View style={{ width, paddingHorizontal: 15, height: 50, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <TouchableOpacity
                onPress={() => {this.openListFont()}}
                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <View style={{ flex: 0.25 }}>
                  <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize }}>
                    Font
                  </Text>
                </View>
                <View style={{ flex: 0.75, alignItems: 'flex-end', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, paddingRight: 10, }}
                    >
                      {this.state.fontFamily}
                    </Text>
                    <Image style={{ height: 20, width: 10, transform: [{rotate: this.state.openFont ? '90deg' : '0deg'}], }} source={ARROW_ICON}/>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.openFont && listFonts.map((item, index) => {return(this.renderListFonts(item, index))})}
          </View>

          <View style={{ width, }}>
            <View style={{ height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize,}}>
                  Font Size
                </Text>
                <View style={{ justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                      disabled={fontSize < 16}
                      onPress={() => {this.decrementFont()}}
                      style={{
                        borderWidth: 1,
                        paddingVertical: 5,
                        paddingHorizontal: 25,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 2,
                        borderBottomRightRadius: 2,
                        borderColor: fontSize < 16 ? 'grey' : 'blue',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: fontSize < 16 ? 'grey' : 'blue',
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={fontSize > 22}
                      onPress={() => {this.incrementFont()}}
                      style={{
                        borderWidth: 1,
                        marginLeft: -1,
                        paddingVertical: 5,
                        paddingHorizontal: 23,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 2,
                        borderBottomLeftRadius: 2,
                        borderColor: fontSize > 22 ? 'grey' : 'blue',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          color: fontSize > 22 ? 'grey' : 'blue',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize,}}>
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


          <View style={{ width, height: 60, paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
            <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize, }}>
              Premium Features
            </Text>
          </View>
          <View style={{ paddingHorizontal: 15, height: 50, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <View style={{ flex: 0.55 }}>
                <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize,}}>
                  Unlock extra features
                </Text>
              </View>
              <View style={{ flex: 0.45 }}>
                <TouchableOpacity style={{ justifyContent: 'center', borderWidth: 1, borderColor: 'blue', borderRadius: 5, paddingHorizontal: 10, paddingVertical: 3,}}>
                  <Text style={{ textAlign: 'center', fontFamily: getFontFamilyFromName(fontFamily), fontSize: 18, color: 'blue' }}>
                    Go Premium
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ height: 50, paddingHorizontal: 15, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#c8c7cc' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Text style={{ fontFamily: getFontFamilyFromName(fontFamily), fontSize,}}>
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

        </ScrollView>
        <Footer leftIcon={TUTORIAL_ICON} centerIcon={LIFEBUOY_ICON} rightIcon={STAR_ICON} />
    </View>
    );
  }
}

mapStatetoProps = (state) => {
  return {
    fontFamily: state.settings.fontFamily,
    fontSize: state.settings.fontSize,
  }
}

export default connect(mapStatetoProps)(Settings);
