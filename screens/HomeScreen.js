import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container,Content} from 'native-base';
import { AsyncStorage } from 'react-native';
import Header from './MiniComponents/Header'
import Footer from './MiniComponents/Footer'
import Loader from './MiniComponents/Loader'
import Separator from './MiniComponents/Separator'
import SwipeMyLists from './MiniComponents/SwipeMyLists'
import SwipeSharedLists from './MiniComponents/SwipeSharedLists'
import { URL , Colors } from '../Static'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLists:[],
      sharedLists:[],
      isLoading: true,
      isLogged:''
    }
    this.checkLog = this.checkLog.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.favoriteList = this.favoriteList.bind(this)
    this.favoriteSubscription = this.favoriteSubscription.bind(this)
    this.deleteList = this.deleteList.bind(this)
    this.deleteSubscription = this.deleteSubscription.bind(this)
  }

  componentDidMount=()=>  {
    this.checkLog()
    this.fetchData()
  }

  async checkLog(){
    let status = await AsyncStorage.getItem('ID')
    this.setState({
      isLogged:status
    })
  }

  async fetchData(){
    let id = await AsyncStorage.getItem('ID')
    if(id == null) return
    ///////////////////////Fetch my lists//////////////////////////////////////////
    await fetch(URL + 'userLists/', { 
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        idUser: id,
      })
    })
    .then((response) => response.json())
    .then(res => {
      this.setState({
        myLists:res.data
      })
    })
    .catch(function (err) {
      console.log(err)
      return err;
    });
    ////////////////////Fetch shared lists//////////////////////////////////////////
    await fetch(URL + 'sharedLists/', { 
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        idUser: id,
      })
    })
    .then((response) => response.json())
    .then(res => {
      this.setState({
        sharedLists:res.data,
        isLoading : false
      })
    })
    .catch(function (err) {
      console.log(err)
      return err;
    });
  }

  async favoriteList(id, fav, index){
    await fetch(URL + 'list/' + id, { 
      method: 'patch',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        favorite: !fav,
      })
    })
    .then( 
      this.state.myLists[index].favorite = !this.state.myLists[index].favorite,
      this.forceUpdate()
      )
    .catch(function (err) {
      console.log(err)
      return err;
    });
  }

  async favoriteSubscription(id, fav, index){
    await fetch(URL + 'subscription/' + id, { 
      method: 'patch',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        favorite: !fav,
      })
    })
    .then( 
      this.state.sharedLists[index].favorite = !this.state.sharedLists[index].favorite,
      this.forceUpdate()
      )
    .catch(function (err) {
      console.log(err)
      return err;
    });
  }

  async deleteList(id, index){
    console.log('id',id)
    // await fetch(URL + 'list/' + id, {
    //   method: 'delete',
    //   headers: {'Content-Type':'application/json'}
    // })
    // .then( 
    //   this.state.myLists.splice(index,1),
    //   this.forceUpdate()
    // )
    // .catch(function (err) {
    //   console.log(err)
    //   return err;
    // });
  }

  async deleteSubscription(id, index){
    console.log('id',id)
    // await fetch(URL + 'subscription/' + id, {
    //   method: 'delete',
    //   headers: {'Content-Type':'application/json'}
    // })
    // .then( 
    //   this.state.sharedLists.splice(index,1),
    //   this.forceUpdate()
    // )
    // .catch(function (err) {
    //   console.log(err)
    //   return err;
    // });
  }
  ////////////////////////////////////////////////////////////////////
  
  render() {
    const renderHome = 
      <Container style={styles.container}>
        <Header title="Home"/>
        
        <Content style={{backgroundColor: Colors.second}}>

          {/* MY LISTS */}
          <Separator title="My lists"/>
          
          <View style={styles.swipeContainer}>
            <SwipeMyLists 
              //onpress={() => Alert.alert('Śmiga')}
              lists={this.state.myLists}
              favoriteList={this.favoriteList}
              deleteList={this.deleteList}
            />
          </View>

          {/* SHARED LISTS */}
          <Separator title='Lists shared to me'/>

          <View style={styles.swipeContainer}>
            <SwipeSharedLists 
              lists={this.state.sharedLists}
              favoriteSubscription={this.favoriteSubscription}
              deleteSubscription={this.deleteSubscription}
            />
          </View>

        </Content>

        <Footer props={this.props}/>

      </Container>
    return (
      <Container>
        {this.state.isLogged != null
          ? this.state.isLoading 
            ? <Loader/> 
            : renderHome
          : null
        }
      </Container>      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  swipeContainer: {
    flex: 1,
  },
});

// const mapStateToProps = (state) => {
//   return(
//     users = state
//   )};

// export default connect(mapStateToProps)(Home);