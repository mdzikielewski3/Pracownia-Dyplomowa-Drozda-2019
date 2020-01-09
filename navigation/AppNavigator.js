import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import HomeScreen from '../screens/HomeScreen'
import ProfileEditScreen from '../screens/ProfileEditScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ShareScreen from '../screens/ShareScreen'
import AddListScreen from '../screens/AddListScreen'
import ShowListScreen from '../screens/ShowListScreen'

import Footer from '../screens/MiniComponents/Footer'
export default createAppContainer(
  createSwitchNavigator({
    LoginScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
    FavoriteScreen: FavoriteScreen,
    HomeScreen: HomeScreen,
    ProfileEditScreen: ProfileEditScreen,
    ProfileScreen: ProfileScreen,
    ShareScreen: ShareScreen,
    AddListScreen: AddListScreen,
    ShowListScreen: ShowListScreen,

    Footer: Footer
  })
)
