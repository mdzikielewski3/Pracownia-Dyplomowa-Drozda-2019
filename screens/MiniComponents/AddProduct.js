import React, { Component } from 'react';
import {StyleSheet,TextInput, View,Text, KeyboardAvoidingView} from 'react-native';
import { Overlay  } from 'react-native-elements'
import {Picker} from "native-base";
import GradientButton from 'react-native-gradient-buttons'
import { ListItem } from 'react-native-elements';
import {URL, ButtonColors} from '../../Static'

export default class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name:'',//nazwa produktu
        amount: '',//ilosc produktu
        shopName:'',//nazwa sklepu
        idProduct:'',
        idShop:'',
        idType:'',//
        idUnit:'',//
        products:[],//Wyszukane produkty po nazwie
        shops:[] //Wyszukane sklepy po nazwie
    }
    this.closeOverlay = this.closeOverlay.bind(this)
  }

    // Wyszukanie produktu po nazwie
    // SKONCZONE
    async searchProduct(e){

        this.setState({
        name:e
        })

        await fetch(URL + 'productName/', { 
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: e,
        })
        })
        .then((response) => response.json())
        .then(res => {
        this.setState({
            products: res.data,
        })
        })
        .catch(function (err) {
        console.log(err)
        return err;
        });
    }

    // Wyszkanie sklepu po nazwie
    // SKONCZONE
    async searchShop(e){

        this.setState({
        shopName:e
        })

        await fetch(URL + 'shopName/', { 
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            name: e,
        })
        })
        .then((response) => response.json())
        .then(res => {
        this.setState({
            shops: res.data,
        })
        })
        .catch(function (err) {
        console.log(err)
        return err;
        });
    }

    // Po nacisnieciu buttona !!!!!!!!!!!!BRAKUJE ID PRODUKTU I SHOP
    closeOverlay(){
        this.props.makeProducts(this.state.idProduct,this.state.idShop,this.state.amount)
        this.props.setVisible()
    }

  render() {
      let productHeight = this.state.products.length *60
    return (
        <Overlay fullScreen overlayStyle={{alignItems:"center"}} isVisible={this.props.isVisible}>
            
            <Text style={styles.text}>Add product</Text>
            
            <TextInput
                placeholder='Product name'
                value={this.state.name}
                underlineColorAndroid='#000'
                style={styles.input}
                onChangeText={(event)=> this.searchProduct(event)}
            />
            <View style={{backgroundColor:'#ddd', height:productHeight, width:'95%', alignItems:"center", justifyContent:"center"}}>
                {this.state.products.map((product,i)=>(
                    <ListItem
                        key={i}
                        title={product.name}
                        style={{width:'90%'}}
                        bottomDivider
                        onPress={()=> this.setState({
                            name: product.name,
                            idProduct: product.id,
                            products:[]
                        })}
                    />
                ))}
            </View>
            <TextInput
                placeholder='Amount'
                value={this.state.amount}
                keyboardType='numeric'
                style={styles.input}
                underlineColorAndroid='#000'
                onChangeText={(amount)=> this.setState({amount})}
            />

            <View style={styles.container}>
                <Picker
                    mode="dialog"
                    prompt='Choose unit of measure'
                    selectedValue={this.state.idUnit}
                    style={styles.picker}
                    onValueChange={(value)=> this.setState({idUnit:value})}
                >
                    {this.props.units.map((unit,i)=>(
                        <Picker.Item label={unit.name} value={unit.id} key={i}/>
                    ))}
                </Picker>
            </View>

            <TextInput
                placeholder='Search shop'
                value={this.state.shopName}
                style={styles.input}
                underlineColorAndroid='#000'
                onChangeText={(event)=> this.searchShop(event)}
            />
            
            <View style={styles.container}>
                <Picker
                    mode="dialog"
                    prompt='Choose product type'
                    selectedValue={this.state.idType}
                    style={styles.picker}
                    onValueChange={(value)=> this.setState({idType:value})}
                >
                    {this.props.types.map((type,i)=>(
                        <Picker.Item label={type.name} value={type.id} key={i}/>
                    ))}
                </Picker>
            </View>

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
                onPressAction={()=>this.closeOverlay()}
              />
        </Overlay>
    );
  }
}

const styles = StyleSheet.create({
    text:{
        fontSize:20
    },
    container:{
        width:'90%',
        borderColor:'#666',
        borderBottomWidth:1,
        margin: 10,
    },
    input:{
        width:'92%',
        margin:10,
        padding:10,
        fontSize:17,
    },
    picker:{
        height:40
    }
  });
  