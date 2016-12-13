
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity>
                <Text>
                  {'<'}Settings
                </Text>
              </TouchableOpacity>
              <Text >
                List
              </Text>
              <TouchableOpacity>
                <Text>
                  edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

module.exports = Main;
