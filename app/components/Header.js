
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import { SETTINGS_ICON, EDIT_ICON, } from 'AppIcons';
import { HelveticaNeue } from 'AppFonts';

const styles = StyleSheet.create({
  header:{
    marginTop: 26,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
  },
});

export default class Header extends Component {
  // state = {
  //   scrollChange: false,
  // }
  //
  // pressHeaderRight = () => {
  //   this.props.onRightPress();
  //   this.setState({scrollChange: !this.state.scrollChange});
  // }
  render() {
    return (
      <View style={styles.header}>
        <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingBottom: 15 }}>
          <View>
            <TouchableOpacity style={{ width: 70 }}>
              <Image style={{width: 25, height: 25}} source={SETTINGS_ICON}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontSize:22, fontFamily: HelveticaNeue}}>
              Lists
            </Text>
          </View>
          <View>
            <TouchableOpacity style={{ width: 70, alignItems: 'flex-end' }}>
              <Image  style={{width: 25, height: 25, marginLeft: 15,}} source={EDIT_ICON}/>
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity
          style={{flex: 0.8,paddingLeft:20 ,width: 35, height: 35}}
          onPress={this.props.onLeftPress}>
          {
            this.props.leftTitleAdd
            ?
              this.props.leftTitle
              ?
              <Text style={{fontSize:20}}> Cancel </Text>
              :
              <Image style={{width: 25, height: 25}} source={{uri: 'settings.png'}}/>
            :

                this.props.leftTitle
                ?
                  //<Image  style={{width: 25, height: 25}} source={{uri: 'add.png'}}/>
                :
                  <Image  style={{width: 25, height: 25}} source={{uri: 'settings.png'}}/>
          }
        </TouchableOpacity>
        <View style={{flex:3,alignItems:'center', marginLeft:-25}}>

        <Text style={{ fontSize:20,}}>
          { this.props.leftTitleAdd
            ?
              this.props.leftTitle
              ?
              <Text style={{fontSize:20}}> Add new list </Text>
              :
              <Text>Lists </Text>
            :

              this.props.rightTitle
              ?
                <Text style={{fontSize:20,}}>Edit lists</Text>
              :
                <Text style={{fontSize:20,}}>Lists</Text>

          }
        </Text>
        </View>
        <TouchableOpacity style={{flex:0.7,width: 35,height: 35,}}  onPress={() => {this.pressHeaderRight()}}>
          {
            this.props.rightTitle
            ?
              <Text style={{fontSize:20,}}>Done</Text>
            :
              <Image  style={{width: 25, height: 25, marginLeft: 15,}} source={{uri: 'edit.png'}}/>
          }
        </TouchableOpacity> */}
      </View>

    );
  }
}
