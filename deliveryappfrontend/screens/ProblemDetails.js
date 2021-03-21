import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProblemDetails = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 10,height:'100%', justifyContent: 'center', alignContent: 'center',paddingRight:20,paddingLeft:20,paddingBottom:20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                    <Icons name="arrow-back" size={30} onPress={()=>navigation.goBack()}
                        style={{ marginRight: 40, color: "#FDC913" }}></Icons>
                        </TouchableOpacity>
                    <Text style={{
                        fontSize: 25, marginBottom: 50,
                        color: "#696969", fontFamily: "OpenSansBold",
                    }}>Problem Details</Text>

                </View>
                <View style={styles.view6}>
                    <View style={styles.view4}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                marginTop: 20, marginLeft: 20, fontFamily: "OpenSansSemiBold",
                                color: "#696969"
                            }}>Problem ID</Text>
                            <TouchableOpacity style={{ paddingTop: 5, paddingLeft: 50 }} >
                                <Text style={{
                                    backgroundColor: "#FDC913", fontSize: 15, fontFamily: "OpenSansSemiBold",
                                    color: "white",marginLeft:105,padding:10,
                                    borderRadius: 20, marginTop:10
                                }}>Closed</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            marginLeft: 20, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>1</Text>
                    </View>


                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10, fontFamily: "OpenSansSemiBold",
                            color: "#696969"
                        }}>Reported On</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>8 Feb, 12.00 pm</Text>
                    </View>


                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,fontFamily: "OpenSansSemiBold",
                            color: "#696969"
                        }}>Problem</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>Order Related Problem</Text>
                    </View>

                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,  fontFamily: "OpenSansSemiBold",
                            color: "#696969"
                        }}>Restaurant Name</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>ABC</Text>
                    </View>

                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,  fontFamily: "OpenSansSemiBold",
                            color: "#696969"
                        }}>Reason</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>Waited for a long time</Text>
                    </View>

                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,  fontFamily: "OpenSansSemiBold",
                            color: "#696969"
                        }}>Comments</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>We here noticed the problem</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 5, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }}>8 Feb, 12.08 pm</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProblemDetails;

const styles = StyleSheet.create({
 
    
    view6: {
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:20,
       

    },
})