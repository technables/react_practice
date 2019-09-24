import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  constructor(props) {
    super(props);
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View>
        <Text>Welcome to home</Text>
        <View>
          <Button title="Open Menu" onPress={this.buttonPressed} />
        </View>
      </View>
    );
  }
}

export default Home;
