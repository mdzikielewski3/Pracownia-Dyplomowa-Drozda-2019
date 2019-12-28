import React from 'react';
import { StyleSheet, View, Button, list} from 'react-native';
//import { ListItem } from 'react-native-elements';
import { Container, Header, Content, List, ListItem, Text, Title, Body } from 'native-base';
export default class LearningView extends React.Component {

    render(){
        const list = [
            {
              name: 'Makron swiderki',
              unit: 'KG',
              type: 'Spozywcze'
            },
            {
              name: 'Musztarda',
              unit: 'KG',
              type: 'Spozywcze'
            },
            {
              name: 'Bateria AA',
              unit: 'Ilosc',
              type: 'Akcesoria'
            }
          ]
        return(
            <Container>
           
            <View>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.unit}
                        iconRight={l.type}
                        itemDivider
                    />
                ))
                }
            </View>
           
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
});
