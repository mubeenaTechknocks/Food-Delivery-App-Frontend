import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const DeliveryTip= ()=>{
    return(
        <View style={{paddingTop:50,paddingBottom:400,backgroundColor:"#f5fffa"}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:25,color:"#696969",
                marginBottom:40,fontFamily:"OpenSansBold",}}>Delivery Tip</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={{paddingLeft:20,paddingTop:5,marginRight:90,color:"#696969",
            fontFamily:"OpenSansSemiBold",}}>Current balance</Text>
            <Text style={{paddingTop:5,fontFamily:"OpenSansSemiBold",color:"#696969",}}>Rs.60</Text>
            </View>
        </View>
    )
}

export default DeliveryTip;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 50,
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
        padding:10,
        marginTop:20,
        marginRight:30,
        flexDirection:'row'

    },
    
})