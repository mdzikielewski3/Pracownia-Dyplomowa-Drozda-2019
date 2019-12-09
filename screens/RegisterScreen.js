import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      password_again: '',
      name: '',
      surname: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      
      <View style={styles.container}>
      <Text style={styles.loginText}></Text>
      <Text style={styles.loginText}></Text>
      <Text style={styles.loginText}></Text>
      <Image style={{width:100,height:100, marginBottom:50}}source={require('../assets/images/Leaf.png')}/>
      
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://image0.flaticon.com/icons/png/512/37/37572.png?size=1200x630f'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('../assets/images/user.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              keyboardType="name-phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/images/key.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={require('../assets/images/key.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password again"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password_again) => this.setState({password_again})}/>
        </View>

        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Have account? Login</Text>
        </TouchableHighlight>

        <Text style={styles.loginText}></Text>
        <Text style={styles.loginText}></Text>
        <Text style={styles.loginText}></Text>
        <Text style={styles.loginText}></Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66CC66',
  },
  inputContainer: {
      borderBottomColor: '#000000',
      backgroundColor: '#FFF8DC',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#000000',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#DEB887",
  },
  loginText: {
    color: 'black',
  }
});