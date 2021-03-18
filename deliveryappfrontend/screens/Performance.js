import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

const Performance= ({navigation})=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingTop:50,backgroundColor:"#f5fffa"}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} onPress={() => navigation.navigate("Contact")}
             style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:24,marginBottom:2,color:"#696969",fontFamily:"OpenSansBold",}}>Performance</Text>
            
            </View>
            <Text style={{fontSize:15,marginLeft:70,marginBottom:15,fontFamily:"OpenSansSemiBold",
                    color:"#696969"}}>22 Feb - 28 Feb</Text>

            <View style={styles.View1}>
                <Icon name="like1" size={30} style={{marginLeft:130,marginTop:15,color:"#FDC913"}}></Icon>
                <Text style={{marginTop:10,marginLeft:53,fontSize:20,fontFamily:"OpenSansSemiBold",
                    color:"#696969"}}>No Reports, All Good</Text>

            </View>
            <Text style={{marginLeft:35,marginTop:20,fontSize:20,fontFamily:"OpenSansSemiBold",
                    color:"#696969"}}>Details</Text>

            <View style={styles.view6}>
                <View style={styles.view4}>
                    <Text style={{marginTop:20,marginLeft:20,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>Order Not Delivered</Text>
                    <Text style={{marginTop:5,marginLeft:20,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>None</Text>
                </View>

                <View style={styles.view4}>
                    <Text style={{marginTop:20,marginLeft:20,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>Order Rejected</Text>
                    <Text style={{marginTop:5,marginLeft:20,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>None</Text>
                </View>

                <View style={styles.view4}>
                    <Text style={{marginTop:10,marginLeft:20,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>Unprofessional Behaviour</Text>
                    <Text style={{marginTop:5,marginLeft:20,fontSize:15,fontFamily:"OpenSansRegular",
            color:"#696969"}}>None</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Performance;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 0,
        marginLeft: 30,
        height: 100,
        width: "36%",
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
        marginRight:5,
        
        //flexDirection:'row'

    },
    view4: {
        marginBottom: 10,
        marginLeft: 25,
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
    View1: {
        marginBottom: 10,
        marginLeft: 15,
        height: 120,
        width: "90%",
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
    view6: {
        marginBottom: 20,
        marginLeft: 35,
        height: 420,
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
