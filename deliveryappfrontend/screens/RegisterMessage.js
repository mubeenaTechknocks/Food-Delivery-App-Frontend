import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'

const RegisterMessage = () => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
            
            <View style={[styles.containertext,{backgroundColor:colors.card}]}>
                <Text style={[styles.text,{color:colors.text}]}>
                    Thank you for registering with us. One of our executive will call you back.
                 </Text>
            </View>
        </View>

    )
}

export default RegisterMessage

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingRight:20,
        paddingLeft:20
    },
    containertext: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 50,
        paddingRight: 50,
        elevation:30
    },
    text:{
        fontSize:18,
        fontFamily:'OpenSansSemiBold',
        paddingTop:50,
        paddingBottom:70,
        color:'#696969'
    }
})