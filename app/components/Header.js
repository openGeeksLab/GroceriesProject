
import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import { SETTINGS_ICON, EDIT_ICON, } from 'AppIcons';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  header:{
    marginTop: Platform.OS === 'android' ? 0 : 26,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    height: 60,
  },
});

class Header extends Component {
  renderLeftView = () => {
    const { leftIcon, leftText, fontFamily, fontSize } = this.props;
    if (leftIcon) {
      return (<Image style={{ width: 25, height: 25 }} source={leftIcon}/>);
    }
    return(<Text style={{ fontFamily, color: 'blue', fontSize: 18 }}>{leftText}</Text>);
  }

  renderRightView = () => {
    const { rightIcon, rightText, fontFamily, fontSize } = this.props;
    if (rightIcon) {
      return(<Image style={{ width: 25, height: 25 }} source={rightIcon}/>);
    }
    return (<Text style={{ fontFamily, color: 'blue', fontSize: 18 }}>{rightText}</Text>);
  }

  render() {
    const { leftIcon, leftText, rightIcon, rightText, title, fontFamily, fontSize } = this.props;

    return (
      <View style={styles.header}>
        <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', /* marginTop: 15, paddingBottom: 15 */ }}>
          <View>
            <TouchableOpacity style={{ width: 75 }} onPress={() => {this.props.leftAction()}}>
              {this.renderLeftView()}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize, fontFamily}}>
              {title}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={{ width: 75, alignItems: 'flex-end' }} onPress={() => {this.props.rightAction()}}>
              {this.renderRightView()}
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

Header.propTypes = {
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  title: PropTypes.string,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

mapStatetoProps = (state) => {
  return {
    fontFamily: state.settings.fontFamily,
    fontSize: state.settings.fontSize,
  }
}

export default connect(mapStatetoProps)(Header);
