import {createAppContainer} from 'react-navigation';
import Home from '../Home';
import Dashboard from '../Dashboard';
import Login from '../Login';

import {createStackNavigator} from 'react-navigation-stack';

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
const MyApp1 = createAppContainer(AppStackNav);

export default MyApp1;
