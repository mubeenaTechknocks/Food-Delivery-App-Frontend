import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const IdPermits = ({navigation}) =>{
    return(
        
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:300}}>
            <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:12,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:24,fontFamily:"OpenSansBold",
                marginBottom:20,color:"#696969"}}>Id & Permit documents</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("ReportProblem")}
            style={{paddingLeft:105,fontFamily:"OpenSansSemiBold",
            paddingTop:2,color:"#696969",fontSize:17}}>Id card</Text></View>

            <View style={styles.view5}>
            <Text   onPress={() => navigation.navigate("PushNotification")}
            style={{paddingLeft:90,paddingTop:3,fontFamily:"OpenSansSemiBold",
            color:"#696969",fontSize:17}}>Documents</Text></View>
        </View>
        
    )
}

export default IdPermits;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 30,
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
        marginTop:25,
        marginRight:30,
        color:"#696969"

    },
    
})