import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>My Page 1</Text>
        <Text>My Page 2</Text>
      </View>
    );
  }
}

export default Sidebar;
