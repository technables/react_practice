import Home from '@components/Home';
import Login from '@components/Login';
import Dashboard from '@components/Dashboard';
import {createStackNavigator} from 'react-navigation-stack';

const AppDefaultStackNav = createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          header: null,
        },
      },
      Home: {
        screen: Home,
        navigationOptions: {
          header: null,
        },
      },
  
      // Dashboard: {
      //   screen: Dashboard,
      //   navigationOptions: {
      //     header: null,
      //   },
      // },
      // Page1: {
      //   screen: Page1,
      //   navigationOptions: {
      //     header: null,
      //   },
      // },
      // Page2: {
      //   screen: Page2,
      //   navigationOptions: {
      //     header: null,
      //   },
      // },
    },
    {
      initialRouteName: 'Home',
    },
  );

  export default AppDefaultStackNav;