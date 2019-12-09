import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//importowanie ekranow
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
export default createAppContainer(
  createSwitchNavigator({
    
    RegisterScreen: RegisterScreen,
    ProfileScreen: ProfileScreen,
    SettingsScreen: SettingsScreen,
    //Main: MainTabNavigator,
  })
);
