import React, {Component} from 'react';

import {View, Text} from 'react-native';

import Home from '@components/Home';
import Login from '@components/Login';
import DefaultSidebar from '@components/DefaultSidebar';

import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

const AppDefaultStackNav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const AppDefaultDrawerNav = createDrawerNavigator(
  {
    HOme: AppDefaultStackNav,
  },
  {contentComponent: DefaultSidebar},
);

const DefaultMenu = createAppContainer(AppDefaultDrawerNav);

export default DefaultMenu;
