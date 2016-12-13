
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
  state = {
    edit: false,
  }

  toggleEdit = () => {

    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
          <View style={styles.container}>
            <Header
              rightTitle={this.state.edit}
              centerText={this.state.edit ? 'Edit list' : 'Lists'}
              leftIcon={this.state.edit ? 'add.png' : 'settings.png'}
              onRightPress={this.toggleEdit}
            />
            <ScrollView style={{flex:1,}}>
            </ScrollView>
            <Footer />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});

module.exports = Main;
