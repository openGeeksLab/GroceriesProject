
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
import { HelveticaNeue, Cochin } from 'AppFonts';

const styles = StyleSheet.create({
  header:{
    marginTop: 26,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
  },
});

export default class Header extends Component {

  renderLeftView = () => {
    const { leftIcon, leftText } = this.props;
    if (leftIcon) {
      return (<Image style={{ width: 25, height: 25 }} source={leftIcon}/>);
    }
    return(<Text style={{ fontFamily: HelveticaNeue, color: 'blue', fontSize: 22 }}>{leftText}</Text>);
  }

  renderRightView = () => {
    const { rightIcon, rightText } = this.props;
    if (rightIcon) {
      return(<Image style={{ width: 25, height: 25 }} source={rightIcon}/>);
    }
    return (<Text style={{ fontFamily: HelveticaNeue, color: 'blue', fontSize: 22 }}>{rightText}</Text>);
  }

  render() {
    const { leftIcon, leftText, rightIcon, rightText, title, } = this.props;

    return (
      <View style={styles.header}>
        <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingBottom: 15 }}>
          <View>
            <TouchableOpacity style={{ width: 70 }} onPress={() => {this.props.leftAction()}}>
              {this.renderLeftView()}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize:22, fontFamily: HelveticaNeue}}>
              {title}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={{ width: 70, alignItems: 'flex-end' }} onPress={() => {this.props.rightAction()}}>
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
