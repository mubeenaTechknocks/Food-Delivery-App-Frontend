import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import { ActivityIndicator } from 'react-native';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class SplashScreen extends Component {
   
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2000);
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.text}>LOGO</Text>
                    {/* <Image source={require('../assets/icon.png')}
                    style={{ width: 150, height: 150}} /> */}
                    {/* <ActivityIndicator size="large" color='#00BFFF'
                    style={{ margin: 10 }} /> */}
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FDC913',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
        
        // paddingHorizontal: 100,
        // paddingVertical: 320,

    },
    container: {
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 150/2,
    },
    text:{
        alignSelf:'center',
        fontFamily:'OpenSansBold',
        fontSize:30,
        paddingTop:55,
        color:'#FDC913'
    }
})