import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useTheme,useNavigation } from '@react-navigation/native'

const ReportProblem = ({ route }) => {
    
    const { colors } = useTheme()
    const theme = useTheme()
    
    const item = route.params.items

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 10, }}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 20, color: "#FDC913" }}></Icons>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, marginBottom: 30, 
                        color:colors.text, fontFamily: "OpenSansBold", }}>Report new Problem</Text>
                </View>
                <Text style={{ fontSize: 18, marginLeft: 35, color: colors.text,
                 fontFamily: "OpenSansSemiBold", }}>Selected Order</Text>
                <View style={[styles.view6,{backgroundColor:colors.card}]}>
                    <Text style={{
                        marginLeft: 10, marginTop: 10, fontFamily: "OpenSansRegular",
                        color: colors.text,
                        
                    }}>Item: Restaurant Name</Text>
                    <Text style={{
                        marginLeft: 10, marginTop: 10, fontFamily: "OpenSansRegular",
                        color: colors.text,
                    }}>Date, Time</Text>
                </View>

                <Text style={{
                    marginLeft: 35, fontSize: 18,
                    color: colors.text, fontFamily: "OpenSansSemiBold",
                }}>Enter Problem Details</Text>

                <View style={[styles.view4,{backgroundColor:colors.card}]}>
                    <Text style={{
                        marginLeft: 20, marginTop: 10, fontSize: 18,
                        color: colors.text, fontFamily: "OpenSansSemiBold",
                    }}>{item.name}</Text>
                    <Text style={{
                        marginLeft: 20, marginTop: 10, fontSize: 18,
                        color: colors.text, fontFamily: "OpenSansSemiBold",
                    }}>Please give more Details</Text>
                    <View style={[styles.view5,{backgroundColor:colors.card}]}>
                        <TextInput style={{
                            marginLeft: 25, marginTop: 10, fontFamily: "OpenSansRegular",
                            color: "#696969"
                        }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                        <TouchableOpacity style={{ paddingTop: 5 }} onPress={() => navigation.navigate("NewProblem")}>
                            <Text style={{
                                backgroundColor:colors.primary, fontSize: 15, fontFamily: "OpenSansSemiBold",
                                color: "white", height: 38, paddingTop: 8,
                                paddingLeft: 30, paddingRight: 25, paddingBottom: 10,
                                borderRadius: 20, width: "87%", marginLeft: 12, marginRight: 10
                            }}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ paddingTop: 5 }} onPress={() => navigation.navigate("NewProblem")}>
                            <Text style={{
                                backgroundColor:colors.primary, fontSize: 15, fontFamily: "OpenSansSemiBold",
                                color: "white", height: 38, paddingTop: 8,
                                paddingLeft: 30, paddingRight: 20, paddingBottom: 10,
                                borderRadius: 20, width: "86%", marginLeft: 15, marginRight: 15
                            }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default ReportProblem;

const styles = StyleSheet.create({
    view6: {
        marginBottom: 30,
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
        padding: 10,
        marginTop: 20,
        marginRight: 30,
        //flexDirection:'row'

    },
    view5: {
        marginBottom: 30,
        marginLeft: 26,
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
        padding: 10,
        marginTop: 20,
        marginRight: 30,
        //flexDirection:'row'

    },

    view4: {
        marginBottom: 30,
        marginLeft: 35,
        height: 300,
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