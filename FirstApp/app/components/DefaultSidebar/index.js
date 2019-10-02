import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '@components/Home';
import Dashboard from '@components/Dashboard';
import Page1 from '@components/Page1';
import Page2 from '@components/Page2';

const AppDefaultDrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: Home,
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
    Page1: {
      screen: Page1,
      navigationOptions: {
        header: null,
      },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteName: 'Dashboard'},
  // {contentComponent: DefaultSidebar},
);

export default AppDefaultDrawerNav;
