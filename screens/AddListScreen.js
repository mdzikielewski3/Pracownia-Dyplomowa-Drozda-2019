import React, { Component } from 'react';
import {Container,Content} from 'native-base';
import {StyleSheet,Text,View,TextInput, AsyncStorage} from 'react-native';
import GradientButton from 'react-native-gradient-buttons'
import Header from './MiniComponents/Header'
import Footer from './MiniComponents/Footer'
import AddProduct from './MiniComponents/AddProduct'
import ProductsList from './MiniComponents/ProductsList'
import { URL, Colors, ButtonColors } from '../Static'

export default class AddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible:false,
      products:[],//produkty na liscie
      types:[],//Wszystkie typy z bazy
      units:[],//Wszystkie unity z bazy
      idList:'',
      listName:''//Nazwa listy
    }
    this.setVisible = this.setVisible.bind(this)
    this.makeProducts = this.makeProducts.bind(this)
    this.getListId = this.getListId.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.saveList = this.saveList.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }

  valid(){
    if(this.state.listName === '') return false
    return true
  }
  /// pozyskanie typów i unitów z bazy
  async fetchData(){
    await fetch(URL + 'types/')
    .then((response) => response.json())
    .then(res => {
        this.setState({
        types:res
        })
    })
    .catch(function (err) {
        console.log(err)
        return err;
    });
    /////////////////////////////////
    await fetch(URL + 'measures/', { 
        method: 'get',
        headers: {'Content-Type':'application/json'},
    })
    .then((response) => response.json())
    .then(res => {
        this.setState({
        units:res
        })
    })
    .catch(function (err) {
        console.log(err)
        return err;
    });
  }

  // otwieranie i zamykanie overlaya
  // SKONCZONE
  setVisible(){
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  // Dodawanie productów z overlaya do tabeli aby je zfeczowac
  // SKONCZONE
  makeProducts(idProduct,idShop, amount){
    let data={}
    data.amount = amount
    data.idProduct = idProduct
    data.idShop = idShop
    this.setState(state=>{
      const products = state.products.concat(data)
      return{
        products
      }
    })
  }

  /// Pozyskanie ostatniego id listy w tabeli List
  /// SKONCZONE
  async getListId(){
    await fetch(URL + 'listId/')
    .then((response) => response.json())
    .then(res => {
        this.setState({
        idList: res.id
        })
    })
    .catch(function (err) {
        console.log(err)
        return err;
    });
  }

  async createList(){
    let id = await AsyncStorage.getItem('ID')
    console.log(id,this.state.listName)
    // await fetch(URL + 'lists/', { 
    //   method: 'post',
    //   headers: {'Content-Type':'application/json'},
    //   body: JSON.stringify({
    //     "name": this.state.listName,
    //     "idOwner": id
    //   })
    // })
    // .then((response) => response.json())
    // .catch(function (err) {
    //   console.log(err)
    //   return err;
    // });
  }
  /// Dodawanie do tabeli list_product
  async saveList(){
    if(this.valid()) {
    await this.createList()
    await this.getListId()
    this.state.products.map((product,i)=>{
      product.idList = this.state.idList
      console.log(product)
    })
  }
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
        },
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
    // console.log(this.state.products)

    const renderList =
      <Container style={styles.container}>
        <Header title='Add list'/>
        <Content contentContainerStyle={styles.content}>

          {/*Input nazwy listy*/}
          <View style={{backgroundColor:'#ddd', alignItems:"center", justifyContent:"center"}}>
            <TextInput
              placeholder="List name"
              value={this.state.listName}
              placeholderTextColor='#666'
              underlineColorAndroid='#666'
              style={{width:'80%', padding:10, fontSize:18, textAlign:"center"}}
              onChangeText={(listName)=> this.setState({listName})}
            />
          </View>

          {/*Buttony*/}
          <View style={{backgroundColor:'#ddd', flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
            <GradientButton
              text="Add product"
              textStyle={{ fontSize:15 }}
              gradientBegin= {ButtonColors.primary}
              gradientEnd={ButtonColors.second}
              height={40}
              width='35%'
              radius={15}
              impact
              style={{margin:10}}
              onPressAction={()=> this.setVisible()}
            />
            <GradientButton
              text="Save list"
              textStyle={{ fontSize:15 }}
              gradientBegin= {ButtonColors.primary}
              gradientEnd={ButtonColors.second}
              height={40}
              width='35%'
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

          <ProductsList list={list}/>
        </Content>
        <Footer props={this.props}/>
      </Container>
    return (
      <Container>
        {this.state.isVisible === true
          ? <AddProduct 
              isVisible={this.state.isVisible}
              setVisible={this.setVisible}
              types={this.state.types}
              units={this.state.units}
              makeProducts={this.makeProducts}
            />
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
    }
  });
  