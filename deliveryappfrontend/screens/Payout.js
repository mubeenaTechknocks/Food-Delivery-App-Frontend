import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Payout= ({navigation}) =>{
    return(
        <View style={{paddingTop:10,paddingBottom:300}}>
            <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Earnings")}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:60,color:"#FDC913"}}></Icons>
            </TouchableOpacity>
            <Text style={{fontSize:24,marginBottom:40,fontFamily:"OpenSansBold",
                    color:"#696969",}}>Payout History</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:30,marginLeft:30,fontFamily:"OpenSansSemiBold",
                    color:"#696969",fontSize:18}}>Total Payout Transferred</Text>
            <Text style={{fontFamily:"OpenSansSemiBold",
                    color:"#696969",fontSize:18}}>Rs.50</Text>
            </View>

            <View style={styles.view5}>
            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,fontFamily:"OpenSansRegular",marginLeft:25,
                    color:"#696969"}}>Weekly Earning</Text>
            <Text style={{margin:10,marginLeft:65,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Rs.88</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,fontFamily:"OpenSansRegular",marginLeft:25,
                    color:"#696969"}}>COD</Text>
            <Text style={{margin:10,marginLeft:135,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Rs.50</Text>
            </View>
            </View>

            <Text style={{marginLeft:35,fontFamily:"OpenSansSemiBold",fontSize:18,
                    color:"#696969"}}>Payout History</Text>


            <View style={styles.view5}>
            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,fontFamily:"OpenSansRegular",
                    color:"#696969",marginLeft:25}}>Sun, 28 Feb</Text>
            <Text style={{margin:10,marginLeft:95,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Rs.0</Text>
            </View>
            

           
            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,fontFamily:"OpenSansRegular",
                    color:"#696969",marginLeft:25}}>Fri, 26 Feb</Text>
            <Text style={{margin:10,marginLeft:103,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Rs.0</Text>
          
            </View>
            </View>
            </View>

    )
}

export default Payout

const styles= StyleSheet.create({
    view5: {
        marginBottom: 50,
        marginLeft: 35,
        height: 100,
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

    },
    
})