/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class App extends Component {
  render() {
    return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Welcome to React Navigation</Text>
          <Button title='Go to test' onPress={() => this.props.navigation.navigate('Test')}>
            
          </Button>
        </View>
    );
  }
}

class Test extends Component {
  render() {
    return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>This is test component</Text>
          <Button title="Go to app" onPress={() => this.props.navigation.navigate('Home')}>
            
          </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
    },
    Test: {
      screen: Test,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
