import React, {Component} from 'react';

import {View, Text, TextInput} from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text>Welcome to dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;
