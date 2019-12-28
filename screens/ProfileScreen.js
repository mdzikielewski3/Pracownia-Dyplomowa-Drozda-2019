import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {

      login: 'Janek Lesgos',
      avatarUri: 'https://i.imgur.com/bWln98R.jpeg',
      email: 'Rodo@xd.uwm.edu.student.com'
    }
  }

  render () {
    return (
      <Container>
        <Header style={styles.header}>
          <Image style={styles.avatar} source={{uri: this.state.avatarUri }} />
        </Header>
        <Content>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.login}</Text>
              <Text style={styles.info}>{this.state.email}</Text>
              <Text style={styles.description}>Kiedyś tu będzie piękny settings</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileEditScreen')} style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('ProfileEditScreen')}>
                <Text style={styles.buttonText}>Edycja Profilu</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Logout</Text> 
              </TouchableOpacity>
            </View>
          </View>
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
    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'brown',
    height: 200
  },
  avatar: {
    width: 175,
    height: 175,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'brown',
    marginBottom: 10,
    //alignSelf: 'center',
    position: 'absolute',
    marginTop: 60
  },
  name: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600'
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  info: {
    fontSize: 16,
    color: '#DAA520',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: 'brown'
  },
  buttonText: {
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
  }
})
