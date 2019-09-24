/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import Home from '../Home';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Sidebar from '../Sidebar';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Dashboard: {
    screen: Dashboard,
  },
});

const AppStackNav = createStackNavigator({
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
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
    },
  },
});

const MyDrawerNavigator1 = createDrawerNavigator(
  {
    Home: AppStackNav,
  },
  {contentComponent: Sidebar},
);

const MyApp = createAppContainer(MyDrawerNavigator1);

// class MyApp1 extends React.Component{
//     createAppContainer(MyDrawerNavigator1);
// }

export default MyApp;
