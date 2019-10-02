import React, {Component} from 'react';
import {DefaultMenu} from '@components/DefaultMenu';
import {Provider as PaperProvider} from 'react-native-paper';
import {isSignedIn} from './app/auth';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({isSignedIn: res, checkedSignIn: true}))
      .catch(err => console.warn('error occured ' + err));
  }

  render() {
    const {signedIn, checkedSignIn} = this.state;
    if (!checkedSignIn) return null;

    const Layout = DefaultMenu(signedIn);

    return (
      <PaperProvider>
        <Layout />
      </PaperProvider>
    );
  }
}

export default App;
