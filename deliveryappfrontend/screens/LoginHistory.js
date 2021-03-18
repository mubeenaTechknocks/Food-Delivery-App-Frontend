import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';

const LoginHistory= ({navigation})=>{
    return(
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:400}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} onPress={() => navigation.navigate("DeliveryTip")}
            style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:24,marginBottom:40,color:"#696969",fontFamily:"OpenSansBold",}}>Login History</Text>
            </View>

            <View style={styles.view5}>
            <Text  onPress={() => navigation.navigate("COD")}
            style={{paddingLeft:30,paddingTop:20,marginRight:90,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>Today so far </Text>
            <Text style={{paddingTop:20,fontSize:15,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>OM</Text>
            </View>
            <Text style={{marginLeft:35,fontSize:20,fontFamily:"OpenSansSemiBold",
                    color:"#696969"}}>Past Login Information</Text>

            <View style={styles.view4}>
                <View style={{flexDirection:'row'}}>
                <Text style={{paddingLeft:40,paddingTop:20,paddingRight:40,fontSize:15,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>This week</Text>
                <Text style={{fontSize:15,paddingLeft:55,paddingTop:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>5 hr</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,paddingTop:15,paddingLeft:40,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>05 Feb - 08 Feb</Text>
                <Icon1 name="arrowright" size={15} onPress={() =>navigation.navigate("Payout")}
                style={{paddingLeft:56,paddingTop:15,fontSize:25,color:"#FDC913",}}></Icon1>
                </View>
            </View>

            <View style={styles.view4}>
                <View style={{flexDirection:'row'}}>
                <Text style={{paddingLeft:40,paddingTop:20,paddingRight:40,fontSize:15,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Last week</Text>
                <Text style={{fontSize:15,paddingLeft:45,paddingTop:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>6 hr</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:15,paddingTop:15,paddingLeft:40,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Date</Text>
                <Icon1 name="arrowright" size={15} onPress={() =>navigation.navigate("Payout")}
                style={{paddingLeft:120,paddingTop:15,fontSize:25,color:"#FDC913"}}></Icon1>
                </View>
            </View>
        </View>
    )
}

export default LoginHistory;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 30,
        marginLeft: 35,
        height: 80,
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
        marginTop:0,
        marginRight:30,
        flexDirection:'row'

    },
    view4:{
        marginBottom: 20,
        marginLeft: 35,
        height: 120,
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
        //flexDirection:'row'
    }
    
})