
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LIST_INACTIVE_ICON, CART_INACTIVE_ICON, } from 'AppIcons';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
  },
  touchOpacityFooter: {
    width: 50,
    height: 25,
  },
  imageFooter: {
    width: 35,
    height: 25,
  },
});

export default class Footer extends Component {

  renderLeftView = () => {
    const { tintColor, leftIcon } = this.props;
    if (leftIcon) {
      return (
        <TouchableOpacity style={styles.touchOpacityFooter}>
          <Image style={[styles.imageFooter, {tintColor}]} resizeMode={'contain'} source={this.props.leftIcon}/>
        </TouchableOpacity>
      );
    }
    return null;
  }

  renderCenterView = () => {
    const { tintColor, centerIcon } = this.props;
    if (centerIcon) {
      return (
        <TouchableOpacity style={styles.touchOpacityFooter}>
          <Image style={[styles.imageFooter, {tintColor}]} resizeMode={'contain'} source={this.props.centerIcon}/>
        </TouchableOpacity>
      );
    }
    return null;
  }

  renderRightView = () => {
    const { tintColor, rightIcon } = this.props;
    if (rightIcon) {
      return (
        <TouchableOpacity style={styles.touchOpacityFooter}>
          <Image style={[styles.imageFooter, {tintColor}]} resizeMode={'contain'} source={this.props.rightIcon}/>
        </TouchableOpacity>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.footer}>
        {this.renderLeftView()}
        {this.renderCenterView()}
        {this.renderRightView()}
      </View>
    );
  }
}
