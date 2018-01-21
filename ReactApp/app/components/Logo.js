import React, { Component } from 'react';
import { 
    Text, 
    View,
    H1,
    H2,
    H3
} from 'native-base';

import { StyleSheet } from 'react-native';

export default class Logo extends React.Component {
    render (){
        return (
            <View>
                <Text style={styles.monogram}>
                   <H1>AutoSOS</H1> 
                </Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    monogram: {
        fontSize: 25,
        textAlign: 'center',
        justifyContent: 'center',
        color: 'blue',
    },

});
