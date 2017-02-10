
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SETTINGS_ICON, EDIT_ICON, } from 'AppIcons';

import Header from './Header';
import Footer from './Footer';
import {addList} from '../actions';

import {
  HelveticaNeue,
  Georgia,
  Ionicons,
  AmericanTypewriter,
  Cochin,
  times,
  DIN_Alternate,
  gillsans,
  AvenirNext_Regular,
} from 'AppFonts';

export class NewListItem extends Component {
    render() {
      return (
        <TouchableOpacity>
        <View style={styles.newlistcontainer}>
          <Text style={styles.newlisttext}>
            {this.props.text}
          </Text>
        </View>
        </TouchableOpacity>
      )
    }
}

export default class Main extends Component {
  state = {
    // edit: false,
    // add: false,
    // modalVisible: false,
    // newListText: "",
  }

  // addNewList = () => {
  //   var {newListText} = this.state;
  //   if (newListText && newListText !== "") {
  //     this.setState({
  //       newListText: ""
  //     });
  //     this.props.dispatch(addList(newListText));
  //   }
  // }
  //
  // toggleAdd = () => {
  //
  //   this.setState({ add: !this.state.add });
  // }
  //
  // toggleEdit = () => {
  //   this.setState({ edit: !this.state.edit });
  // }
  //
  // setModalVisible(visible) {
  //     this.setState({modalVisible: visible});
  //   }
  // onLeftonPress = () => {
  //   this.toggleAdd();
  //   this.setModalVisible(true);
  // }
  // onLeftonPressoff = () => {
  //   this.toggleAdd();
  //   this.setModalVisible(false);
  // }
  //
  // changeText = (text) => {
  //   var newText = text;
  //   this.setState({
  //     newListText: text,
  //   });
  // }


  render() {
    var renderNewLists = () => {
      return this.props.newlists.map((newlist)=> {
        return(
          <NewListItem text={newlist.text} key={newlist.id} id={newlist.id}/>
        )
      })
    }
    return (
          <View style={styles.container}>
            <Header leftIcon={SETTINGS_ICON} leftAction={() => { console.warn('Settings Press') }} rightAction={() => { console.warn('Edit press') }} rightIcon={EDIT_ICON} title={'Lists'} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: HelveticaNeue, fontSize: 20, }}>
                HelveticaNeue
              </Text>
              <Text style={{ fontFamily: Georgia, fontSize: 20, }}>
                Georgia
              </Text>
              <Text style={{ fontFamily: Ionicons, fontSize: 20, }}>
                Ionicons
              </Text>
              <Text style={{ fontFamily: AmericanTypewriter, fontSize: 20, }}>
                AmericanTypewriter
              </Text>
              <Text style={{ fontFamily: Cochin, fontSize: 20, }}>
                Cochin
              </Text>
              <Text style={{ fontFamily: times, fontSize: 20, }}>
                Times New Roman
              </Text>
              <Text style={{ fontFamily: DIN_Alternate, fontSize: 20, }}>
                DIN_Alternate
              </Text>
              <Text style={{ fontFamily: gillsans, fontSize: 20, }}>
                Gill Sans
              </Text>
              <Text style={{ fontFamily: AvenirNext_Regular, fontSize: 20, }}>
                AvenirNext_Regular
              </Text>
            </View>
            <Footer />
            {/* <Header
              rightTitle={this.state.edit}
              centerText={this.state.edit}
              onRightPress={() => {this.toggleEdit()}}
              leftTitle={this.state.edit}
              leftTitleAdd={this.state.add}
              onLeftPress={() => {this.onLeftonPress()}}
            />
            <ScrollView style={{flex:1,}}
              automaticallyAdjustContentInsets={false}>
              {renderNewLists()}
            </ScrollView>
            <Footer />
             <Modal animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              >
                  <Header
                    rightTitle={this.state.edit}
                    centerText={this.state.edit}
                    onRightPress={this.onLeftonPressoff}
                    leftTitle={this.state.edit}
                    leftTitleAdd={!this.state.add}
                    onLeftPress={this.onLeftonPressoff}
                  />
                <View style={{alignItems:'stretch',paddingLeft: 20,
                              paddingRight: 20, marginTop: 50,
                              borderBottomWidth:2, borderColor: 'gray',}}>
                  <TextInput
                    style={{height: 40, }}
                    onChangeText={(text) => {this.changeText(text)}}
                    value={this.state.newListText}
                    returnKeyType="done"
                    placeholder="Input new list"
                    onSubmitEditing={this.addNewList}
                  />

               </View>
               <View style={{alignItems:'flex-end'}}>
                <Text> Characters left: 28
                </Text>
               </View>
             </Modal> */}
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  newlistcontainer:{
    padding: 16,
    borderWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  newlisttext:{
    color: 'black',
  },
});

var mapStatetoProps = (state) => {
  return{
    newlists: state.newlists
  }
}

module.exports = connect(mapStatetoProps)(Main);
