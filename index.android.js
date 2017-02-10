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

import Navigator from './app/components/Navigator';
import {configureStore} from './app/store';

export default class GroceriesProject extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Navigator />
      </Provider>

    );
  }
}

AppRegistry.registerComponent('GroceriesProject', () => GroceriesProject);
