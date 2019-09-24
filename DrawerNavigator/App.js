import React, {Component} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';

import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import {createAppContainer} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
//import DrawerNavigator from 'react-navigation-drawer/lib/typescript/src/navigators/createDrawerNavigator';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.clickEvent = this.clickEvent.bind(this);
//   }

//   //createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

//   clickEvent() {
//     this.props.navigation.openDrawer();
//     //this.props.navigation.goBack();
//   }

//   render() {
//     return <Button onPress={this.clickEvent} title="Open Menu" />;
//   }
// }

// const AppStack = DrawerNavigator({
//   home: {screen: Home},
//   dashboard: {screen: Dashboard},
// });

//export default App;

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {

  constructor(){
    super();
    this.clickEvent = this.clickEvent.bind(this);
  }

  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('./notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  clickEvent() {
    this.props.navigation.openDrawer();
    //this.props.navigation.goBack();
  }

  render() {
    return (
      <Button
        onPress={this.clickEvent}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

export default MyApp;
