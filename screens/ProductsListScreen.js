import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Content, 
    List, 
    ListItem, 
    Left, 
    Body, 
    Right, 
    Thumbnail, 
    Text, 
    View,
    Footer,
    FooterTab,
    Button,
    Icon,
    
    
    } from 'native-base';
import {  
    StyleSheet,
    TouchableOpacity,
    Alert
    } from 'react-native';





export default class ListAvatarExample extends Component {

    CheckWorking = () => {
        Alert.alert("Naciskanie śmiga");
    }
    AddProduct = () => {
        Alert.alert("Funkja - Dodaj produkt")
    }


  render() {

    const list = [
        {
          name: 'Makron swiderki',
          unit: 'Kilogramy',
          type: 'Spozywcze',
          uri: 'https://image.flaticon.com/icons/png/512/2424/2424492.png'
        },
        {
          name: 'Musztarda',
          unit: 'Kilogramy',
          type: 'Spozywcze',
          uri: 'https://image.flaticon.com/icons/png/512/2424/2424492.png'
        },
        {
          name: 'Bateria AA',
          unit: 'Ilosc',
          type: 'Akcesoria',
          uri: 'https://image.flaticon.com/icons/png/512/995/995053.png'
        },
        {
            name: 'Woda',
            unit: 'Litry',
            type: 'Spozywcze',
            uri: 'https://image.flaticon.com/icons/png/512/2424/2424492.png'
        }
      ]

    return (
      <Container>
        <Header style={styles.headerStyle}>
          <Text style={styles.HeaderText}> Lista produktów </Text>
        </Header>
        <Content>
          <List>
            <ListItem style={styles.listAddbutton}>
              <TouchableOpacity onPress={() => this.AddProduct()}>
                <Left>
                  <Thumbnail square source={{ uri: 'https://image.flaticon.com/icons/png/512/1665/1665578.png' }} />
                </Left>
                <Body>
                  <Text> Dodaj produkt </Text>
                </Body>
              </TouchableOpacity>
            </ListItem>
            <View>
            {
              list.map((l, i) => (
                // notka zmienic native-base na react-native-elements
                <ListItem style={styles.list}>
                  <TouchableOpacity onPress={() => this.CheckWorking()}>
                    
                    <Left style={styles.listleft}>
                      <Thumbnail square  source={{ uri: l.uri }} />
                    </Left>
                   
                    <Body style={styles.listbody}>
                      <Text style={styles.listSubtitletext}>{l.name}</Text>
                      <Text note style={styles.listSubtitletext}>{l.type} - {l.unit}</Text>
                    </Body>
                    
                    <Right style={styles.listright}>
                    </Right>

                  </TouchableOpacity>
                </ListItem>
                
              ))
            }
            </View>
          </List>
        </Content>
        <Footer style={styles.footerTab}>
          <Text></Text>
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
      borderRadius: 63,
      borderWidth: 4,
      marginBottom: 0,
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
    list: {
      justifyContent: 'center',
      //marginBottom: 0
    },
    listbody: {
      justifyContent: 'center',
    },
    listleft: {
      justifyContent: 'center',
      //marginRight: 20
    },
    listright: {
      justifyContent: 'center',
    },
    listAddbutton: {
      justifyContent: 'center',
    },
    listSubtitletext: {
      justifyContent: 'center',
    }
  });
  