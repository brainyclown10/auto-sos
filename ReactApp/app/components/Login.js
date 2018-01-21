import React, { Component } from 'react';
import { 
    Text, 
    View, 
    Button
} from 'native-base';

import { Alert } from 'react-native';

export default class Login extends React.Component {
    
    skipLogin(){
        Alert.alert('Skipping the login for now')

        }
    render (){
        return (
            <View>
                <Text> AutoSOS </Text>
                <Button
                    onPress={this.skipLogin}
                    title="Login"
                    color="black"
                >
                <Text> Log In  </Text>
                </Button>
            </View>
            
        )
    }
}
