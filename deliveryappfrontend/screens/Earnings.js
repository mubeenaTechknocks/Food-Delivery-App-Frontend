import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Earnings = ({navigation}) =>{
    return(
        <View style={{paddingTop:50,backgroundColor:"#f5fffa",paddingBottom:400}}>
            <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:24,marginBottom:40,color:"#696969",fontFamily:"OpenSansBold",}}>Earnings</Text>
            </View>

            <View style={styles.view5}>
            <View style={{flexDirection:'row',marginTop:5}}>
            <Text style={{margin:10,marginLeft:25,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>22 Feb - 28 Feb</Text>
            <Text style={{margin:10,marginLeft:65,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Rs.185</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,marginLeft:25,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>This week Earning</Text>
            <Icon1 name="arrowright" size={20} style={{margin:10,marginLeft:65,color:"#FDC913"}}></Icon1>
            </View>
            

            
            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,marginLeft:25,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Payout History</Text>
            <Icon1 name="arrowright" size={20} onPress={() =>navigation.navigate("Payout")}
            style={{margin:10,marginLeft:85,color:"#FDC913"}}></Icon1>
            </View>
            </View>
            


            
            <View style={styles.view5}>
            <View style={{flexDirection:'row',marginTop:5}}>
            <Text style={{margin:10,marginLeft:25,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>25 Feb - 21 Feb</Text>
            <Text style={{margin:10,marginLeft:65,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Rs.80</Text>
            </View>

            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,marginLeft:25,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Last week Earning</Text>
            <Icon1 name="arrowright" size={20} style={{margin:10,marginLeft:65,color:"#FDC913"}}></Icon1>
            </View>
            

         
            <View style={{flexDirection:'row'}}>
            <Text style={{margin:10,marginLeft:25,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Payout History</Text>
            <Icon1 name="arrowright" onPress={() =>navigation.navigate("Payout")}
             size={20} style={{margin:10,marginLeft:85,color:"#FDC913"}}></Icon1>
            </View>
            </View>
 
            </View>

    )
}
 export default Earnings;

 const styles= StyleSheet.create({
    view5: {
        marginBottom: 50,
        marginLeft: 35,
        height: 150,
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
        marginTop:10,
        marginRight:30,
        
        //flexDirection:'row'

    },
    
})