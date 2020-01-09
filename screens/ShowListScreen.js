import React, { Component } from 'react';
import {Container,Content} from 'native-base';
import {StyleSheet,Text,View,AsyncStorage, ScrollView} from 'react-native';
import GradientButton from 'react-native-gradient-buttons'
import Header from './MiniComponents/Header'
import Footer from './MiniComponents/Footer'
import ProductsList from './MiniComponents/ProductsList'
import { URL, Colors, ButtonColors } from '../Static'

export default class AddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true
    }
  }

  componentDidMount(){

  }

  render() {
    console.log(this.props)
    const renderList =
      <Container style={styles.container}>
        <Header title='Show list'/>
        <Content contentContainerStyle={styles.content}>

          {/*Nazwa listy*/}
          <View style={{backgroundColor:'#ddd', alignItems:"center", justifyContent:"center"}}>
            <Text style={styles.listNameText}>
                asdb
            </Text>
          </View>

          {/*Buttony*/}
          <View style={{backgroundColor:'#ddd', flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
            <GradientButton
              text="Edit list"
              textStyle={{ fontSize:15 }}
              gradientBegin= {ButtonColors.primary}
              gradientEnd={ButtonColors.second}
              height={40}
              width='30%'
              radius={15}
              impact
              style={{margin:10}}
              onPressAction={()=> this.saveList()}
            />
          </View>

          {/*Info*/}
          <View style={{backgroundColor:'#aaa', flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={[styles.infoText,{marginLeft:20}]}>Product</Text>
            <Text style={[styles.infoText,{marginRight:20}]}>Bought?</Text>
          </View>
          
          {/*Wyswietlenie listy produktów */}
          <ScrollView>
            {/* {this.state.products.map((product, i) => (
              <ProductsList product={product} key={i}/>
            ))} */}
          </ScrollView>

        </Content>
        <Footer props={this.props}/>
      </Container>
    return (
      <Container>
        {this.state.isVisible === true
          ? null
          : renderList 
        } 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      backgroundColor: Colors.second,
    },
    infoText:{
      color:'#fff',
      margin:5
    },
    listNameText:{
        fontSize:20,
        margin:5
    }
  });
  