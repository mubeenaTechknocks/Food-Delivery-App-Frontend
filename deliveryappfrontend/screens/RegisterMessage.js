import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'

const RegisterMessage = () => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
             <StatusBar style={{backgroundColor:colors.background}} barStyle={theme.dark ? "light-content" :"default"} />
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
        // backgroundColor: 'white',
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
        paddingTop:50,
        paddingBottom:70
    }
})