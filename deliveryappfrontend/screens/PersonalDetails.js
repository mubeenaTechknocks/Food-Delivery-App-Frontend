import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { useTheme, Avatar, Drawer } from 'react-native-paper';

const PersonalDetails = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <StatusBar style={{ backgroundColor: colors.background }} barStyle={theme.dark ? "light-content" : "default"} />
            <Text style={styles.text}>Personal Details</Text>
            <View style={styles.inputcontainer}>
                <View style={styles.row}>
                    <Text style={styles.text1}>Name</Text>
                    <Text style={styles.iconname}>:</Text>
                    
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>ID</Text>
                    <Text style={styles.iconid}>:</Text>
                    
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>Account Number</Text>
                    <Text style={styles.iconnum}>:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>Joining Date</Text>
                    <Text style={styles.icondate}>:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>Zone</Text>
                    <Text style={styles.iconzone}>:</Text>
                </View>
            </View>
            <View >
                <Text style={styles.texth}>Emergency Details</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.row}>
                    <Text style={styles.text1}>Emergency contact</Text>
                    <Text style={styles.iconcon}>:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>Blood Group</Text> 
                    <Text style={styles.icongrp}>:</Text>
                </View>
            </View>

        </View>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputcontainer:{
        backgroundColor:'white',
        elevation:20,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:20
    },
    row:{
        flexDirection:'row',
        paddingBottom:10, 
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'OpenSansBold',
        fontSize: 30,
        paddingBottom: 50
    },
    text1:{
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
    },
    texth: {
        paddingTop:20,
        fontFamily: 'OpenSansBold',
        fontSize: 23,
        paddingBottom: 20
    },
    iconname:{
        paddingTop:5,
        paddingLeft:107,
        paddingRight:10
    },
    iconid:{
        paddingTop:5,
        paddingLeft:141,
        paddingRight:10
    },
    iconnum:{
        paddingTop:5,
        paddingLeft:10,
        paddingRight:10
    },
    icondate:{
        paddingTop:5,
        paddingLeft:52,
        paddingRight:10
    },
    iconzone:{
        paddingTop:5,
        paddingLeft:115,
        paddingRight:10
    },
    iconcon:{
        paddingTop:5,
        paddingLeft:13,
        paddingRight:10
    },
    icongrp:{
        paddingTop:5,
        paddingLeft:70,
        paddingRight:10
    },

})