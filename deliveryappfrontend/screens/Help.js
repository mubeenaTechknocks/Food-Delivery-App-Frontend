import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Help = ({navigation}) => {
    return (
        <View style={{ paddingTop: 10, }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 110, color: "#FDC913" }}></Icons>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 28, marginBottom: 20, color: "#696969", fontFamily: "OpenSansBold", }}>Help</Text>
                </View>

                <View style={styles.view5}>
                    <Text style={{
                        marginLeft: 15, fontSize: 18, marginTop: 5, fontFamily: "OpenSansSemiBold",
                        color: "#696969"
                    }}>Report new Problem</Text>

                    <TouchableOpacity style={{ paddingTop: 20 }} onPress={() => navigation.navigate("NewProblem")}>
                        <Text style={{
                            backgroundColor: "#FDC913", fontSize: 18,
                            color: "white", fontFamily: "OpenSansBold",
                            borderRadius: 20,  alignSelf:'center',
                            padding:10
                        }}>Report Problem</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{
                    fontSize: 18, marginLeft: 35, marginTop: 20, fontFamily: "OpenSansSemiBold",
                    color: "#696969"
                }}>Problem History</Text>

                <View style={styles.view5}>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <Text style={{
                            marginLeft: 15, fontFamily: "OpenSansRegular",
                            marginTop: 10, color: "#696969",
                            fontSize:15
                        }}>Restaurant waiting time</Text>
                        <Text style={{
                            marginLeft: 55, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969",fontSize:15
                        }}>ID:1</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            marginLeft: 15, marginRight: 20, fontFamily: "OpenSansRegular",
                            color: "#696969",fontSize:15
                        }}>08 Feb,12.08 pm</Text>
                        <TouchableOpacity style={{ paddingTop: 5,paddingLeft:50 }} onPress={() => navigation.navigate("ProblemDetails")}>
                            <Text style={{
                                 backgroundColor: "#FDC913", fontSize: 15, fontFamily: "OpenSansSemiBold",
                                 color: "white",  paddingLeft:15,paddingRight:15,paddingTop:10,
                                 paddingBottom:10,
                                 borderRadius: 20, width:80,alignSelf:'center'
                            }}>Closed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view5}>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <Text style={{
                            marginLeft: 15, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969",fontSize:15
                        }}>Pickup mile/ Deliver mile</Text>
                        <Text style={{
                            marginLeft: 47, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969",fontSize:15
                        }}>ID:2</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            marginLeft: 15, fontFamily: "OpenSansRegular",
                            marginRight: 30, color: "#696969",fontSize:15
                        }}>07 Feb,10.00 pm</Text>
                        <TouchableOpacity style={{ paddingTop: 5,paddingLeft:35  }} onPress={() => navigation.navigate("ProblemDetails")}>
                            <Text style={{
                                backgroundColor: "#FDC913", fontSize: 15, fontFamily: "OpenSansSemiBold",
                                color: "white", paddingLeft:20,paddingRight:15,paddingTop:10,
                                paddingBottom:10,
                                borderRadius: 20, width:80,alignSelf:'center'
                            }}>Open</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}
export default Help;


const styles = StyleSheet.create({
    view5: {
        marginBottom: 15,
        marginLeft: 35,
        height: 140,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 30,

        //flexDirection:'row'

    },

})