/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import Home from  '../Home'
import Dashboard from '../Dashboard';
import Login from '../Login';


import {createDrawerNavigator} from 'react-navigation-drawer';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Dashboard: {
    screen: Dashboard,
  },
});

const MyDrawerNavigator1 = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator1);

class MyApp1 extends React.Component{
    createAppContainer(MyDrawerNavigator1);
}

export default MyApp;
