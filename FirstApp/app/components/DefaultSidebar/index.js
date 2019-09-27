import React, {Component} from 'react';
import styles from '../../style';
import {View, Text, Image, TouchableOpacity} from 'react-native';

class DefaultSidebar extends Component {
  constructor(props) {
    super(props);
  }

  navigate(route) {
    this.props.navigate.navigate(route);
  }

  render() {
    const routes = [
      {
        title: 'Home',
        route: 'Home',
      },
      {
        title: 'Login',
        route: 'Login',
      },
    ];

    return (
      <View style={styles.container}>
        <Image
          style={styles.sidebarlogo}
          source={require('../../assets/appicon.jpg')}
        />
        {routes.map(e => (
          <TouchableOpacity
            key={e.title}
            style={styles.link}
            onPress={_ => this.navigate(e.route)}>
            <Text key={e.title}>{e.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default DefaultSidebar;
