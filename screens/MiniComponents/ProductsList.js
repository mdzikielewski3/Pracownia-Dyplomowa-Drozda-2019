import React from 'react';
import {Thumbnail} from 'native-base';
import {StyleSheet,ScrollView} from 'react-native';
import { ListItem, CheckBox} from 'react-native-elements'

export default function ProductList(props){
    return (
        <ScrollView>
            {props.list.map((product, i) => (
            <ListItem
                key={i}
                title={product.name}
                subtitle={product.type}
                bottomDivider
                leftElement={
                <Thumbnail
                    square
                    style={styles.icon}
                    source={{uri: product.uri}}
                />
                }
                rightElement={
                <CheckBox/>
                }
            />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({ 
    icon:{
        height:35,
        width:35
    }
  });
  