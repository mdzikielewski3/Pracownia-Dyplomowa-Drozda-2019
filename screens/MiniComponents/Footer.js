import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Footer, FooterTab, Button, Icon } from 'native-base'
import { Colors, TextColors } from '../../Static'

export default function footer ({ props }) {
  return (
    <Footer>
      <FooterTab style={styles.footerContainer}>
        <Button vertical onPress={() => props.navigation.navigate('HomeScreen')}>
          <Icon name='home' />
          <Text style={styles.footerText}>Home</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('FavoriteScreen')}>
          <Icon name='star' />
          <Text style={styles.footerText}>Favorite</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('AddListScreen')}>
          <Icon name='add' />
          <Text style={styles.footerText}>Add list</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('ShareScreen')}>
          <Icon name='share' />
          <Text style={styles.footerText}>Share list</Text>
        </Button>
        <Button vertical onPress={() => props.navigation.navigate('ProfileScreen')}>
          <Icon name='person' />
          <Text style={styles.footerText}>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: Colors.primary
  },
  footerText: {
    color: TextColors.primary,
    opacity: 0.5
  }
})
