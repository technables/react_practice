import React, { Component } from 'react'
import {
        View,Text
} from 'react-native';

class Login extends Component{

    constructor(props){
        super(props)
    }

    render() {
        return(
            <View>
            <Text>
                Welcome to login
            </Text>
            </View>
        );
    }
}

export default Login