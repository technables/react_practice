/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import Navigator from './app/components/DrawerNavigator';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navigator />;
  }
}

export default App;
