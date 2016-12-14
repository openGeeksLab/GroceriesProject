
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
            <View style={styles.header}>
              <TouchableOpacity
                style={{flex: 1,paddingLeft:20 ,width: 40, height: 35}}
                onPress={this.props.onLeftPress}>

                { this.props.leftTitleAdd
                  ?
                    this.props.leftTitle
                    ?
                    <Text style={{fontSize:20}}> Cansel </Text>
                    :
                    <Image style={{width: 25, height: 25}} source={{uri: 'settings.png'}}/>
                  :

                      this.props.leftTitle
                      ?
                        <Image  style={{width: 25, height: 25}} source={{uri: 'add.png'}}/>
                      :
                        <Image  style={{width: 25, height: 25}} source={{uri: 'settings.png'}}/>

                }
              </TouchableOpacity>
              <Text style={{flex:3,textAlign:'center',fontSize:20}}>
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
              <TouchableOpacity style={{flex:0.7,width: 35,height: 35}} onPress={this.props.onRightPress}>
                {
                  this.props.rightTitle
                  ?
                    <Text style={{fontSize:20,}}>Done</Text>
                  :
                    <Image  style={{width: 25, height: 25, marginLeft: 15,}} source={{uri: 'edit.png'}}/>
                }
              </TouchableOpacity>
            </View>

    );
  }
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#f5f5f5',
  },
});

module.exports = Header;
