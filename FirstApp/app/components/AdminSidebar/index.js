import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../style';

class AdminSidebar extends Component {
  constructor(props) {
    super(props);
  }

  navigate(route) {
    this.props.navigation.navigate(route);
  }

  render() {
    const routes = [
      {title: 'Dashboard', name: 'Dashboard'},
      {title: 'Page1', name: 'Page1'},
      {title: 'Page2', name: 'Page2'},
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

export default AdminSidebar;
