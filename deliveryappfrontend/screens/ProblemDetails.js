import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { color } from 'react-native-reanimated';
import {useTheme } from 'react-native-paper'

const ProblemDetails = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()
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
                        fontFamily: "OpenSansBold",color:colors.text
                    }}>Problem Details</Text>

                </View>
                <View style={[styles.view6,{backgroundColor:colors.card}]}>
                    <View style={styles.view4}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.problem,{color:colors.text}]}>Problem ID</Text>
                            <TouchableOpacity style={{ paddingTop: 5, paddingLeft: 50 }} >
                                <Text style={{
                                    backgroundColor:colors.primary, fontSize: 15, fontFamily: "OpenSansSemiBold",
                                    color: "white",marginLeft:105,padding:10,
                                    borderRadius: 20, marginTop:10
                                }}>Closed</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            marginLeft: 20, fontFamily: "OpenSansRegular",
                           color:colors.text
                        }}>1</Text>
                    </View>


                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10, fontFamily: "OpenSansSemiBold",
                            color:colors.text
                        }}>Reported On</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color:colors.text
                        }}>8 Feb, 12.00 pm</Text>
                    </View>


                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,fontFamily: "OpenSansSemiBold",
                            color:colors.text
                        }}>Problem</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color:colors.text
                        }}>Order Related Problem</Text>
                    </View>

                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,  fontFamily: "OpenSansSemiBold",
                            color:colors.text
                        }}>Restaurant Name</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color:colors.text
                        }}>ABC</Text>
                    </View>

                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,  fontFamily: "OpenSansSemiBold",
                            color:colors.text
                        }}>Reason</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color:colors.text
                        }}>Waited for a long time</Text>
                    </View>

                    <View style={styles.view4}>
                        <Text style={{
                            marginLeft: 20,marginTop: 10,  fontFamily: "OpenSansSemiBold",
                            color:colors.text
                        }}>Comments</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 10, fontFamily: "OpenSansRegular",
                            color:colors.text
                        }}>We here noticed the problem</Text>
                        <Text style={{
                            marginLeft: 20, marginTop: 5, fontFamily: "OpenSansRegular",
                            color:colors.text
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
    problem:{
        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansSemiBold",
      
    }
})