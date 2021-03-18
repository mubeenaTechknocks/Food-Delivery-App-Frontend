import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const WeekLogin= ()=>{
    return(
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:300}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:24,marginBottom:5,color:"#696969",fontFamily:"OpenSansBold"}}>Weekly Login Details</Text>
          
            </View>
            <Text style={{marginLeft:125,color:"#696969",
                fontFamily:"OpenSansSemiBold"}}>05 Feb - 08 Feb</Text>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={{paddingLeft:20,paddingTop:5,marginRight:110,color:"#696969",
            fontFamily:"OpenSansSemiBold"}}>Sunday, 08 Feb</Text>
            <Text style={{paddingTop:5,color:"#696969",
                fontFamily:"OpenSansSemiBold"}}>3 hr</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={{paddingLeft:20,paddingTop:5,marginRight:100,color:"#696969",
            fontFamily:"OpenSansSemiBold"}}>Saturday, 07 Feb</Text>
            <Text style={{paddingTop:5,color:"#696969",
                fontFamily:"OpenSansSemiBold"}}>2 hr</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={{paddingLeft:20,paddingTop:5,marginRight:120,color:"#696969",
            fontFamily:"OpenSansSemiBold"}}>Friday, 06 Feb</Text>
            <Text style={{paddingTop:5,color:"#696969",
                fontFamily:"OpenSansSemiBold"}}>1 hr</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={{paddingLeft:20,paddingTop:5,marginRight:100,color:"#696969",
            fontFamily:"OpenSansSemiBold"}}>Thursday, 05 Feb</Text>
            <Text style={{paddingTop:5,color:"#696969",
                fontFamily:"OpenSansSemiBold"}}>1 hr</Text>
            </View>
        </View>
    )
}

export default WeekLogin;

const styles= StyleSheet.create({
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
        padding:10,
        marginTop:20,
        marginRight:30,
        flexDirection:'row'

    },
    
})