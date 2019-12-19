import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//importowanie ekranow
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LearningScreen from '../screens/LearningScreen';
export default createAppContainer(
  createSwitchNavigator({
    LearningScreen: LearningScreen,
    RegisterScreen: RegisterScreen,
    ProfileScreen: ProfileScreen,
    SettingsScreen: SettingsScreen,
    LoginScreen: LoginScreen
    //Main: MainTabNavigator,
  })
);
