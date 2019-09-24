import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  navigate(route){
      this.props.navigation.navigate(route);
  }

  render() {
    const routes = [
      {
        title: 'Home',
        route: 'Home',
      },
      {
        title: 'Dashboard',
        route: 'Dashboard',
      },
    ];

    return (
      <View style={styles.container}>
        <Image
          style={{height: 100, width: 100}}
          source={require('../../../images/appicon.jpg')}
        />
        {/* <Text>My Page 1</Text>
        <Text>My Page 2</Text> */}
        {routes.map(e => (
          <TouchableOpacity key={e.title}
            style={styles.link}
            onPress={_ => this.navigate(e.route)}>
            <Text key={e.title}>{e.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 10,
  },
  link: {
      padding:15,
      borderBottomWidth:2,
      borderBottomColor:'#eee'
  },
});

export default Sidebar;
