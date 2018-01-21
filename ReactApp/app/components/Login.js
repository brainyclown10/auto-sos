import React, { Component } from 'react';
import { 
    Text, 
    View, 
    Button
} from 'native-base';

export default class Login extends React.Component {
    render (){
        return (
            <View>
                <Text> AutoSOS </Text>
                <Button
                    title="Login"
                    color="black"
                >
                Please Log In
                </Button>
            </View>
            
        )
    }
}
