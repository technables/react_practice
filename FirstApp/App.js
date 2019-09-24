import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PaperProvider>
        <Text></Text>
      </PaperProvider>
    );
  }
}

export default App;
