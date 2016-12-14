
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
  state = {
    edit: false,
    add: false,
    modalVisible: false,
  }

  toggleAdd = () => {
    this.setState({ add: !this.state.add });
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  modulAdd = () =>{
    this.setState({modalVisible: visible});
  }

  render() {
    return (
          <View style={styles.container}>
            <Header
              rightTitle={this.state.edit}
              centerText={this.state.edit ? 'Edit list' : 'Lists'}
              onRightPress={this.toggleEdit}
              leftTitle={this.state.edit}
              leftTitleAdd={this.state.add}
              onLeftPress={this.toggleAdd}
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
