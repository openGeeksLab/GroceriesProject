import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
} from 'react-native';
import { connect } from 'react-redux';
import { getFontFamily, getFontSize, getTheme } from '../actions/settings-actions';
import Main from '../pages/Main';
import Settings from '../pages/Settings';

class NavigatorClass extends Component {
  componentWillMount() {
    this.props.dispatch(getFontFamily());
    this.props.dispatch(getFontSize());
    this.props.dispatch(getTheme());
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Main'}}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'Main': return (<Main route={route} navigator={navigator} />);
            case 'Settings': return (<Settings route={route} navigator={navigator} />);
            default: null;

          }
        }}
        configureScene={(route, routeStack) =>{
          switch (route.title) {
            case 'Main': return Navigator.SceneConfigs.FloatFromRight;
            case 'Settings': return Navigator.SceneConfigs.FloatFromLeft;
            default: return Navigator.SceneConfigs.FloatFromRight;
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect()(NavigatorClass);
