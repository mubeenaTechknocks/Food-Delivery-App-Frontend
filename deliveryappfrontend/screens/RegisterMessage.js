import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RegisterMessage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containertext}>
                <Text style={styles.text}>
                    Thank you for registering with us. One of our executive will call you back.
                 </Text>
            </View>
        </View>

    )
}

export default RegisterMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingRight:20,
        paddingLeft:20
    },
    containertext: {
        backgroundColor: '#FDC913',
        borderRadius: 20,
        paddingLeft: 50,
        paddingRight: 50
    },
    text:{
        fontSize:18,
        fontFamily:'OpenSansRegular',
        paddingTop:70,
        paddingBottom:70
    }
})