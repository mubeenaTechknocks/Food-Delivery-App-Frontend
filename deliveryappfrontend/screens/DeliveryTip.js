import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme } from 'react-native-paper'
import { color } from 'react-native-reanimated';

const DeliveryTip = ({navigation}) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={{ paddingTop: 10, paddingBottom: 400 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 80, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={[styles.DeliveryTip,{color:colors.text}]}>Delivery Tip</Text>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text 
                    style={[styles.text1,{color:colors.text}]}>Current balance</Text>
                <Text style={[styles.text2,{color:colors.text}]}>Rs.60</Text>
            </View>
        </View>
    )
}

export default DeliveryTip;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 50,
        marginLeft: 30,
        
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 15,
        marginTop: 20,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent:'space-between'

    },
    DeliveryTip:{
        fontSize: 25, color: "#696969",
        marginBottom: 40, fontFamily: "OpenSansBold",
    },
    text1:{
        fontSize:15,
        color: "#696969",
        fontFamily: "OpenSansSemiBold",
    },
    text2:{ 
       fontSize:15,
        fontFamily: "OpenSansSemiBold",
        color: "#696969",
   }

})