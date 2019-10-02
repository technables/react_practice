import React from 'react';
import {View, Text} from 'react-native';
import {Card, Button, FormLabel, FormInput} from 'react-native-elements';
import {onSignIn} from '../../auth';

const SignUp = ({navigation}) => (
  <View style={{paddingVertical: 20}}>
    {/* <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{marginTop: 20}}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'));
        }}
      />
      <Button
        buttonStyle={{marginTop: 20}}
        backgroundColor="transparent"
        textStyle={{color: '#bcbec1'}}
        title="Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </Card> */}

    <Text>This is signup</Text>

    <Button
        buttonStyle={{marginTop: 20}}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'));
        }}
      />

    <Button
      buttonStyle={{marginTop: 20}}
      backgroundColor="transparent"
      textStyle={{color: '#bcbec1'}}
      title="Sign In"
      onPress={() => navigation.navigate('SignIn')}
    />
  </View>
);

export default SignUp;
