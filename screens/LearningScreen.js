import React from 'react';
import { StyleSheet,Text, Alert} from 'react-native';
import { Container, 
  Header, 
  Content,
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  InputGroup, 
  Input 
} from 'native-base';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  SearchFunction = () => {
    Alert.alert("KLIKŁEŚ WYSZUKAJ!");
  }

  render() {
    return (
      <Container>
        <Header searchBar style={styles.header}>
          <InputGroup style={styles.headerInputGroup}>
            <Icon name="search" style={styles.icon}/>
            <Input placeholder="Search" style={styles.headerInput}/>
            <Button onPress={() => this.SearchFunction()} vertical style={styles.headerButton}>
              <Text style={styles.headerText}>Search</Text>
            </Button>
          </InputGroup>
          
        </Header>
        <Content>
        <Text>Tutaj jest już tylko tutaj nie ma</Text>
        </Content>
        <Footer>
          <FooterTab style ={styles.footerTab}>
            <Button  vertical>
              <Icon style = {styles.iconfooterTab} name="apps" />
              <Text style={styles.footerText}>Home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('ProfileScreen')} vertical>
              <Icon style = {styles.iconfooterTab} name="person" />
              <Text style={styles.footerText}>Profile</Text>
            </Button>
            <Button vertical>
              <Icon style = {styles.iconfooterTab} name="md-exit" />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    color:"white"
  },
  iconfooterTab:{
    color:"white"
  },
  footerText:{
    color:"white",
    opacity:0.5
  },
  footerTab:{
    backgroundColor:"brown"
  },
  header:{
    height:70,
    backgroundColor:"brown"
  },
  headerInputGroup:{
    width:"100%",
    marginTop:20
  },
 
  headerInput:{
    backgroundColor:"white", 
    borderWidth:1, 
    borderColor:"white", 
    borderRadius:50, 
    height:35
  },
  headerButton:{
    marginLeft:10,
    borderWidth:1,
    borderColor:"black",
    backgroundColor: '#BDC3C7',
  },
  headerText:{
    color:"black",
    margin:3,
    marginLeft:5,
    marginRight:5
  },
  
});
