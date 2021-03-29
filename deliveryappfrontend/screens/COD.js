import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme } from 'react-native-paper'

const COD= ({navigation})=>{
    const { colors } = useTheme()
    const theme = useTheme()
    return(
        <View style={{paddingTop:10,paddingBottom:400}}>
                 <View style={{flexDirection:'row'}}>
                     <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:60,color:"#FDC913"}}></Icons>
            </TouchableOpacity>
            <Text style={[styles.COD,{color:colors.text}]}>Cash on Delivery</Text>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
            <Text 
            style={[styles.balance,{color:colors.text}]}>Current balance</Text>
            <Text style={[styles.rs,{color:colors.text}]}>Rs.50</Text>
            </View>
        </View>
    )
}

export default COD;

const styles= StyleSheet.create({
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
        padding:15,
        marginTop:20,
        marginRight:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    COD:{
        fontSize:24,
        marginBottom:40,
        color:"#696969", 
        fontFamily:"OpenSansBold",
},
balance:{
    fontSize:15,
    color:"#696969",
    fontFamily:"OpenSansSemiBold",
},
rs:{
    fontSize:15,
    color:"#696969", 
    fontFamily:"OpenSansSemiBold",
}
    
})