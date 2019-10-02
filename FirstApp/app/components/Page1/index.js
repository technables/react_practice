import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>this is page 1</Text>
      </View>
    );
  }
}

export default Page1;
