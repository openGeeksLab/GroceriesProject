import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
} from 'react-native';
import Main from './Main';
import Settings from './Settings';

export default class NavigatorClass extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Settings'}}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'Main': return (<Main route={route} navigator={navigator} />);
            case 'Settings': return (<Settings route={route} navigator={navigator} />);
            default: null;

          }
        }}
        configureScene={(route, routeStack) =>{
          switch (route.title) {
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
