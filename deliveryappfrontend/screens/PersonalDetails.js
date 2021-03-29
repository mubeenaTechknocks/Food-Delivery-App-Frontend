import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { useTheme, Avatar, Drawer } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/Ionicons'

const PersonalDetails = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={()=>navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={[styles.text,{color:colors.text}]}>Personal Details</Text>
            </View>
            <View style={[styles.inputcontainer,{backgroundColor:colors.card}]}>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>Name</Text>
                    <Text style={[styles.iconname,{color:colors.text}]}>:</Text>

                </View>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>ID</Text>
                    <Text style={[styles.iconid,{color:colors.text}]}>:</Text>

                </View>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>Account Number</Text>
                    <Text style={[styles.iconnum,{color:colors.text}]}>:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>Joining Date</Text>
                    <Text style={[styles.icondate,{color:colors.text}]}>:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>Zone</Text>
                    <Text style={[styles.iconzone,{color:colors.text}]}>:</Text>
                </View>
            </View>
            <View >
                <Text style={[styles.texth,{color:colors.text}]}>Emergency Details</Text>
            </View>
            <View style={[styles.inputcontainer,{backgroundColor:colors.card}]}>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>Emergency contact</Text>
                    <Text style={[styles.iconcon,{color:colors.text}]}>:</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.text1,{color:colors.text}]}>Blood Group</Text>
                    <Text style={[styles.icongrp,{color:colors.text}]}>:</Text>
                </View>
            </View>

        </View>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'OpenSansBold',
        fontSize: 25,
        color: '#696969'
    },
    text1: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        color: '#696969'
    },
    texth: {
        paddingTop: 20,
        fontFamily: 'OpenSansBold',
        fontSize: 23,
        paddingBottom: 20,
        color: '#696969'
    },
    iconname: {
        paddingTop: 5,
        paddingLeft: 107,
        paddingRight: 10
    },
    iconid: {
        paddingTop: 5,
        paddingLeft: 141,
        paddingRight: 10
    },
    iconnum: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    icondate: {
        paddingTop: 5,
        paddingLeft: 52,
        paddingRight: 10
    },
    iconzone: {
        paddingTop: 5,
        paddingLeft: 115,
        paddingRight: 10
    },
    iconcon: {
        paddingTop: 5,
        paddingLeft: 13,
        paddingRight: 10
    },
    icongrp: {
        paddingTop: 5,
        paddingLeft: 70,
        paddingRight: 10
    },
    menu: {
        paddingRight: 35,
        paddingTop: 5
    },
    textcontainer:{
        paddingBottom:50,
        flexDirection:'row'
    },

})