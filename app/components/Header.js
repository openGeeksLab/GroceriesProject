
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
              <TouchableOpacity style={{flex: 1,paddingLeft:30  ,width: 35,height: 35}}>
                <Image style={{width: 20, height: 20}} source={{uri: 'settings.png'}}/>
              </TouchableOpacity>
              <Text style={{flex:6,textAlign:'center',fontSize:20}}>
                Groceries
              </Text>
              <TouchableOpacity style={{flex:1,width: 35,height: 35}}>
                <Image style={{width: 20, height: 20}} source={{uri: 'edit.png'}}/>
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
