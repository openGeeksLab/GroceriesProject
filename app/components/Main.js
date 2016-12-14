
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
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

  setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  onLeftonPress = () => {
    this.toggleAdd;
    this.setModalVisible(true);
  }
  onLeftonPressoff = () => {
    this.toggleAdd;
    this.setModalVisible(false);
  }

  render() {
    return (
          <View style={styles.container}>
            <Header
              rightTitle={this.state.edit}
              centerText={this.state.edit}
              onRightPress={this.toggleEdit}
              leftTitle={this.state.edit}
              leftTitleAdd={this.state.add}
              onLeftPress={this.onLeftonPress}
            />
            <ScrollView style={{flex:1,}}>
            </ScrollView>
            <Footer />
             <Modal animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              >
                  <Header
                    rightTitle={this.state.edit}
                    centerText={this.state.edit}
                    onRightPress={this.toggleEdit}
                    leftTitle={this.state.edit}
                    leftTitleAdd={!this.state.add}
                    onLeftPress={this.onLeftonPressoff}
                  />
                <View style={{alignItems:'stretch',paddingLeft: 20,
                              paddingRight: 20, marginTop: 50,
                              borderBottomWidth:2, borderColor: 'gray',}}>
                  <TextInput
                    style={{height: 40, }}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />

               </View>
               <View style={{alignItems:'flex-end'}}>
                <Text> Characters left: 28
                </Text>
               </View>
             </Modal>
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
