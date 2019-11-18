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
      <ScrollView>
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

        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
        <Text style={styles.loginText}></Text>
        <Text style={styles.loginText}></Text>
        <Text style={styles.loginText}></Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff1744',
  },
  inputContainer: {
      borderBottomColor: '#003399',
      backgroundColor: '#00FFFF',
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
      borderBottomColor: '#d500f9',
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
    backgroundColor: "#33ff00",
  },
  loginText: {
    color: 'white',
  }
});