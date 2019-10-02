import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Appbar, Card, Title, Paragraph, Button} from 'react-native-paper';
import style from '../../style';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  constructor(props) {
    super(props);
    this.buttonPressed = this.buttonPressed.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  buttonPressed() {
    this.props.navigation.openDrawer();
  }

  loginClicked() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View>
        <Appbar.Header style={{backgroundColor: 'transparent'}}>
          <Appbar.Action icon="menu" onPress={this.buttonPressed} />
          <Appbar.Content title="Home" style={{alignItems: 'center'}} />
        </Appbar.Header>
        <View style={style.appcontainer}>
          <Card style={style.card}>
            <Card.Cover
              source={require('../../assets/appicon.jpg')}
              style={style.logo}
            />
            <Card.Content>
              <Title style={style.textcenter}>Welcome to My App</Title>
              <Paragraph style={style.textcenter}>This is my app</Paragraph>
            </Card.Content>
          </Card>

          <Button icon="camera" mode="contained" onPress={this.loginClicked}>
            Go to login
          </Button>
        </View>
      </View>
    );
  }
}

export default Home;
