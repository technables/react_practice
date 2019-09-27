import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import DefaultMenu from '@components/DefaultMenu';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
        <DefaultMenu />
    );
  }
}

export default App;
