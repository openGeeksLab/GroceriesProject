
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
            <View style={styles.header}>
              <TouchableOpacity style={{flex: 1,paddingLeft:30  ,width: 35,height: 35}} >
                <Image style={{width: 25, height: 25}} source={{uri: this.props.leftIcon}}/>
              </TouchableOpacity>
              <Text style={{flex:5,textAlign:'center',fontSize:20}}>
                {this.props.centerText}
              </Text>
              <TouchableOpacity style={{flex:1,width: 35,height: 35}} onPress={this.props.onRightPress}>
                {
                  this.props.rightTitle
                  ?
                    <Text style={{fontSize:20,}}>Done</Text>
                  :
                    <Image  style={{width: 25, height: 25}} source={{uri: 'edit.png'}}/>
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
