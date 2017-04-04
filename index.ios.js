/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { uiTheme } from 'AppTheme';
import { ThemeProvider } from 'react-native-material-ui';
import Navigator from './app/components/Navigator';
import store from './app/store';

export default class GroceriesProject extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <Navigator />
        </ThemeProvider>
      </Provider>

    );
  }
}

AppRegistry.registerComponent('GroceriesProject', () => GroceriesProject);
