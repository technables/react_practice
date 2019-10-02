import DefaultSidebar from '@components/DefaultSidebar';

import AppDefaultStackNav from '@components/StackNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const DefaultMenu = (signedIn = false) => {
  return createAppContainer(
    createSwitchNavigator(
      {
        AnonymousMenu: {
          screen: AppDefaultStackNav,
        },
        LoggedInMenu: {
          screen: DefaultSidebar,
        },
      },
      {
        initialRouteName: signedIn ? 'LoggedInMenu' : 'AnonymousMenu',
      },
    ),
  );
};

export default DefaultMenu;
