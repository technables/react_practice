import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Dashboard extends Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard',
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
        <Text>Welcome to dashboard</Text>
        <View>
          <Button title="Open Menu" onPress={this.buttonPressed} />
        </View>
      </View>
    );
  }
}

export default Dashboard;
