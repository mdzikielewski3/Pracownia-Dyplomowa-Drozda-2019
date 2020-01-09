import React from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Icon} from 'native-base';
import { ListItem } from 'react-native-elements';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { SwipeButtonsColors} from '../../Static'

const SharedLists = props =>{
    return (
        <SwipeListView
            onPress = {() => console.log('dziala')}
            data={props.lists}
            renderItem={(data, rowMap) => (
            <TouchableOpacity onPress = {() => console.log('dziala')}>
            <SwipeRow 
                onRowPress= {() => console.log('dziala')}
                onPress = {() => console.log('dziala')}
                leftOpenValue={75}
                rightOpenValue={-75}
                stopLeftSwipe={100}
                stopRightSwipe={-100}
            >
            
                <View style={styles.standaloneRowBack}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.swipeLeftButton}
                        onPress={()=> props.favoriteSubscription(
                            data.item.idSub,
                            data.item.favorite,
                            data.index
                        )}
                    >
                        <Icon
                            name='star'
                            style={[
                                styles.swipeIconLeft,
                                data.item.favorite == true 
                                ? {color:SwipeButtonsColors.star} 
                                : {color:SwipeButtonsColors.nostar}
                            ]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.swipeRightButton}
                        onPress={()=> props.deleteSubscription(
                            data.item.idSub,
                            data.index
                        )}
                    >
                        <Icon 
                            name='trash'
                            style= {styles.swipeIconRight}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <ListItem
                        onPress = {() => console.log('dziala')}
                        title={data.item.name}
                        subtitle={data.item.username}
                        chevron
                        bottomDivider
                    /> 
                </View>
            </SwipeRow>
            </TouchableOpacity>
            )}
        />
    );
}
export default SharedLists

const styles = StyleSheet.create({
    standaloneRowBack: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    swipeLeftButton:{
      backgroundColor: SwipeButtonsColors.left,
      width:"50%",
      paddingTop:22,
      paddingBottom:22
    },
    swipeRightButton:{
      backgroundColor:SwipeButtonsColors.right,
      width:"50%",
      alignItems:"flex-end",
      padding:22
    },
    swipeIconRight: {
        color: SwipeButtonsColors.trash,
        marginRight:"4%"
    },
    swipeIconLeft: {
      marginLeft:"15%"
    },
  });