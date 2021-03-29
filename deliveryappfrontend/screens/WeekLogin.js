import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme } from 'react-native-paper'

const WeekLogin = ({navigation}) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={{ paddingTop: 10, paddingBottom: 300 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 20, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={[styles.WeekLogin,{color:colors.text}]}>Weekly Login Details</Text>

            </View>
            <Text style={[styles.feb,{color:colors.text}]}>05 Feb - 08 Feb</Text>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text 
                    style={[styles.sun,{color:colors.text}]}>Sunday, 08 Feb</Text>
                <Text style={[styles.hr,{color:colors.text}]}>3 hr</Text>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text 
                    style={[styles.sat,{color:colors.text}]}>Saturday, 07 Feb</Text>
                <Text style={[styles.hr,{color:colors.text}]}>2 hr</Text>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text 
                    style={[styles.friday,{color:colors.text}]}>Friday, 06 Feb</Text>
                <Text style={[styles.hr,{color:colors.text}]}>1 hr</Text>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text 
                    style={[styles.text1,{color:colors.text}]}>Thursday, 05 Feb</Text>
                <Text style={[styles.hr,{color:colors.text}]}>1 hr</Text>
            </View>
        </View>
    )
}

export default WeekLogin;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 20,
        marginLeft: 35,
        height: 50,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 30,
        flexDirection: 'row'

    },
    text1:
    {
        paddingLeft: 20, 
        paddingTop: 5,
         marginRight: 100, 
         color: "#696969",
        fontFamily: "OpenSansSemiBold"
    },
    hr:{
        paddingTop: 5, color: "#696969",
        fontFamily: "OpenSansSemiBold"
    },
    WeekLogin:{
         fontSize: 24,
         marginBottom: 5,
         color: "#696969",
         fontFamily: "OpenSansBold"
         },
    friday:{
        paddingLeft: 20,
        paddingTop: 5,
        marginRight: 120,
         color: "#696969",
        fontFamily: "OpenSansSemiBold"
    },
    sat:{
        paddingLeft: 20,
        paddingTop: 5,
        marginRight: 100,
        color: "#696969",
        fontFamily: "OpenSansSemiBold"
    },
    feb:{
        marginLeft: 125,
        color: "#696969",
        fontFamily: "OpenSansSemiBold"
    },
    sun:{
        paddingLeft: 20,
        paddingTop: 5, 
        marginRight: 110,
        color: "#696969",
        fontFamily: "OpenSansSemiBold"
    }

})