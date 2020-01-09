import React from 'react';
import { ListItem } from 'react-native-elements';

export default function footer(props){
    return(
        <ListItem
            key={i}
            title={props.name}
            bottomDivider
            onPress = {() => Alert.alert('Działa naciskanie na liste')}
        />
    )
}
