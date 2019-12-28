import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LearningScreen from '../screens/LearningScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import ProductsListScreen from '../screens/ProductsListScreen';

export default createAppContainer(
  createSwitchNavigator({
    ProductsListScreen: ProductsListScreen,
    LearningScreen: LearningScreen,
    RegisterScreen: RegisterScreen,
    ProfileScreen: ProfileScreen,
    SettingsScreen: SettingsScreen,
    LoginScreen: LoginScreen,
    ProfileEditScreen: ProfileEditScreen
  })
);
