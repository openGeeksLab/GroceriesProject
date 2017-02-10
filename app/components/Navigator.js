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
        initialRoute={{ title: 'Main',}}
        renderScene={(route, navigator) => {
          switch (route.title) {
            case 'Main': return (<Main route={route} navigator={navigator} />);
                // title={route.title}
            //     onSettings={() => {
            //       // const nextIndex = route.index + 1;
            //       navigator.push({
            //         title: 'Main',
            //       });
            //     }}
            //     // onBack={() => {
            //     //   if (route.index > 0) {
            //     //     navigator.pop();
            //     //   }
            //     // }}
            //   />);
            // }
            case 'Settings': return(<Settings route={route} navigator={navigator} />);
              // <Settings
              //   onBack={() => {
              //     navigator.push({
              //       title: 'Settings',
              //     });
              //   }}
              // />);
            default: null;

          }
        }
      }
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
