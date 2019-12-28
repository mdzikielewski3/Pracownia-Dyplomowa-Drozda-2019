import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { Container, 
  Header, 
  Content,
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  InputGroup, 
  Input, 
  Title
} from 'native-base';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newNick: '',
      newEmail: '',
      newPassword: '',
      repeatnewPassword: '',
      avatarUri: 'https://i.imgur.com/bWln98R.jpeg',
      nick: 'Janek Lesgos',
      email: 'Rodo@xd.uwm.edu.student.com'
    }
  }
  

  ChangeNick = () =>{
    Alert.alert("Zmieniłeś dane!");
  }
  
  render() {
    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Text style={styles.HeaderText}>Profile Edit</Text>
        </Header>




        
        <Content style={styles.content}>
          <ScrollView>
          <Image style={styles.avatar} source={{uri: this.state.avatarUri }} />
            <Text></Text>
            <Text></Text>


            

            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={require('../assets/images/user.png')}/>
              <TextInput style={styles.inputs}
                placeholder={this.state.nick}
                keyboardType="name-phone-pad"
                underlineColorAndroid='transparent'
                placeholderTextColor='black'
                onChangeText={(newNick) => this.setState({newNick})}/>
            </View>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://image0.flaticon.com/icons/png/512/37/37572.png?size=1200x630f'}}/>
              <TextInput style={styles.inputs}
                placeholder={this.state.email}
               keyboardType="email-address"
               underlineColorAndroid='transparent'
               placeholderTextColor='black'
               onChangeText={(newEmail) => this.setState({newEmail})}/>
            </View>

            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../assets/images/key.png')}/>
              <TextInput style={styles.inputs}
                  placeholder="New Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  placeholderTextColor='black'
                  onChangeText={(newPassword) => this.setState({newPassword})}/>
            </View>

            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../assets/images/key.png')}/>
              <TextInput style={styles.inputs}
                  placeholder="Repeat New Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  placeholderTextColor='black'
                  onChangeText={(repeatnewPassword) => this.setState({repeatnewPassword})}/>
            </View>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.ChangeNick()}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableHighlight>

            <Text></Text>
            <Text></Text>     
            <Text></Text>
            <Text></Text>      
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>     
            <Text></Text>
            <Text></Text>      
            <Text></Text>
            <Text></Text>

        </ScrollView>
      </Content>
      <Footer>
            <FooterTab style={styles.footerTab}>
              <Button onPress={() => this.props.navigation.navigate('LearningScreen')} vertical>
                <Icon style={styles.iconfooterTab} name='apps' />
                <Text style={styles.footerText}>Home</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('ProfileScreen')} vertical>
                <Icon style={styles.iconfooterTab} name='person' />
                <Text style={styles.footerText}>Profile</Text>
              </Button>
              <Button onPress={() => this.props.navigation.navigate('LoginScreen')} vertical>
                <Icon style={styles.iconfooterTab} name='md-exit' />
                <Text style={styles.footerText}>Log out</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1
  },
  content: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: 'white',
  },
  headerStyle: {
    backgroundColor: 'brown',
    height: 75
  },
  HeaderText: {
    color: 'white',
    marginTop:38
   },
   avatar: {
    width: 175,
    height: 175,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'black',
    marginBottom: 0,
    marginTop: 30,
    marginLeft: 115
  },
  inputContainer: {
      borderBottomColor: '#000000',
      backgroundColor: '#D7CCC8',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
      marginLeft: 80
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: 'brown',
    marginTop: 0,
    marginLeft: 80,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  inputs:{
    height:45,
    marginLeft: 16,
    borderBottomColor: '#000000',
    flex: 1,
    color: 'black'
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
    
  },
  buttonText:{
    color: 'white'
  },
  iconfooterTab: {
      color: 'white'
  },
  footerText: {
    color: 'white',
    opacity: 0.5
  },
  footerTab: {
    backgroundColor: 'brown'
  },
});
