import React, {Component} from 'react';

import {View, Text, TextInput, Button, Alert} from 'react-native';
import style from './style';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    username: '',
    password: '',
  };

  static navigationOptions = {
    header: null,
  };

  checkLogin() {
    const {username, password} = this.state;

    const requestBody = JSON.stringify({
      Username: username,
      Password: password,
    });

    const header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    fetch('http://172.18.12.34:5075/api/Account/GetUserLogin', {
      method: 'POST',
      headers: header,
      body: requestBody,
    })
      .then(response => response.json())
      .then(res => {
        if (res == 'success') {
          this.props.navigation.navigate('Dashboard');
        } else {
          Alert.alert('Error', res, [
            {
              text: 'Okay',
            },
          ]);
        }
      })
      .catch(err => console.log(err));
    
  }

  render() {
    const {heading, input, button, parent} = style;
    return (
      <View style={parent}>
        <Text style={heading}>Login into the application</Text>
        <TextInput
          style={input}
          placeholder="username"
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput
          style={input}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={text => this.setState({password: text})}
        />
        <Button
          style={button}
          title={'Login'}
          onPress={() => this.checkLogin()}
        />
      </View>
    );
  }
}

export default Home;
