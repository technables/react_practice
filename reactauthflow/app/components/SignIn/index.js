import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, Button, FormLabel, FormInput} from 'react-native-elements';
import {onSignIn} from '../../auth';

const SignIn = ({navigation}) => (
  <View style={{paddingVertical: 20}}>
    {/* <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{marginTop: 20}}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'));
        }}
      />
    </Card> */}
    <Text>This is sign in</Text>
    <Button
      buttonStyle={{marginTop: 20}}
      backgroundColor="#03A9F4"
      title="SIGN IN"
      onPress={() => {
        onSignIn().then(() => navigation.navigate('SignedIn'));
      }}
    />
  </View>
);

export default SignIn;
