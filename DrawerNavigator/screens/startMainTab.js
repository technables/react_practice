import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-share-alt', 30),
    Icon.getImageSource('ios-menu', 30),
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'Drawer.Dashboard',
          label: 'Dashboard',
          title: 'Dashboard',
          icon: source[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[1],
                title: 'Menu',
                id: 'sideDrawerToggle',
              },
            ],
          },
        },
      ],
      drawer: {
        left: {
          screen: 'DrawerNavigator.SideDrawer',
        },
      },
    });
  });
};

export default startTabs;
