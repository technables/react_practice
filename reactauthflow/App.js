import React, {Component} from 'react';
import {createRootNavigator} from './app/router';
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
      .catch(err => console.warn('an error occured'));
  }

  render() {
    const {signedIn, checkedSignIn} = this.state;
    if (!checkedSignIn) return null;

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

export default App;
