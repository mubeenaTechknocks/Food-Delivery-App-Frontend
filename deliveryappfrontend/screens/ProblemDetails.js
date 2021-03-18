import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProblemDetails= ({navigation})=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingTop:50,backgroundColor:"#f5fffa"}}>
                 <View style={{flexDirection:'row'}}>
            <Icons name="arrow-back" size={30} onPress={() => navigation.navigate("Contact")}
             style={{marginLeft:20,marginRight:20,color:"#FDC913"}}></Icons>
            <Text style={{fontSize:24,marginBottom:20,
                color:"#696969",fontFamily:"OpenSansBold",}}>Problem Details</Text>
            
            </View>
            <View style={styles.view6}>
                <View style={styles.view4}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:20,marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Problem ID</Text>
                    <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>navigation.navigate("Earnings")}>
                    <Text style={{
                                backgroundColor: "#FDC913",fontSize:15,fontFamily:"OpenSansSemiBold",
                                color: "white", height: 35, paddingTop: 6, 
                                paddingLeft: 25, paddingRight: 25, paddingBottom: 10,
                                 borderRadius: 20, width: "87%", marginLeft:15,marginTop:15
                            }}>Closed</Text>
                        </TouchableOpacity>
                        </View>
                    <Text style={{marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>1</Text>
                </View>

                
                <View style={styles.view4}>
                    <Text style={{marginTop:20,marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Reported On</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>8 Feb, 12.00 pm</Text>
                </View>

                   
                <View style={styles.view4}>
                    <Text style={{marginTop:20,marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Problem</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Order Related Problem</Text>
                </View>

                <View style={styles.view4}>
                    <Text style={{marginTop:20,marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Restaurant Name</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>ABC</Text>
                </View>

                <View style={styles.view4}>
                    <Text style={{marginTop:20,marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Reason</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Waited for a long time</Text>
                </View>

                <View style={styles.view4}>
                    <Text style={{marginTop:5,marginLeft:20,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>Comments</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>We here noticed the problem</Text>
                    <Text style={{marginLeft:20,marginTop:5,fontFamily:"OpenSansRegular",
                    color:"#696969"}}>8 Feb, 12.08 pm</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

export default ProblemDetails;

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
        marginBottom: 6,
        marginLeft: 13,
        height: 100,
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
        marginBottom: 30,
        marginLeft: 35,
        height: 780,
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