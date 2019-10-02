import React, {Component} from 'react';
import {View, Image} from 'react-native';
import style from '../../style';
import {TextInput, Button} from 'react-native-paper';
import {onSignIn} from '../../auth';

class Login extends Component {
  static navigationOptions = {
    drawerLabel: 'Login',
    navigationOptions: {
      header: null,
    },
  };

  state = {
    username: '',
    password: '',
  };

  constructor(props) {
    super(props);
    this.loginClicked = this.loginClicked.bind(this);
  }

  loginClicked() {
    const {username, password} = this.state;
    if (username == 'admin' && password == 'admin') {
      onSignIn().then(() => this.props.navigation.navigate('LoggedInMenu'));
    }
  }

  render() {
    return (
      <View style={style.appcontainer}>
        <Image
          source={require('../../assets/appicon.jpg')}
          style={style.logo}
        />
        <View style={style.loginCotainer}>
          <TextInput
            style={style.input}
            label="Username"
            value={this.state.username}
            onChangeText={text => this.setState({username: text})}
          />
          <TextInput
            label="Password"
            style={style.input}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}
          />

          <Button icon="camera" mode="contained" onPress={this.loginClicked}>
            Submit
          </Button>
        </View>
      </View>
    );
  }
}

export default Login;
