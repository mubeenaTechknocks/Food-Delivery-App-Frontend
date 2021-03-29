import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useTheme } from 'react-native-paper'
import { color } from 'react-native-reanimated';

const Earnings = ({ navigation }) => {
        const { colors } = useTheme()
        const theme = useTheme()
        return (
                <View style={{ paddingTop: 10, paddingBottom: 400 }}>
                        <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={()=>navigation.goBack()}> 
                                        <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 90, color: "#FDC913" }}></Icons>
                                </TouchableOpacity>
                                <Text style={[styles.Earnings,{color:colors.text}]}>Earnings</Text>
                        </View>

                        <View style={[styles.view5,{backgroundColor:colors.card}]}>
                                <View style={{ flexDirection: 'row', marginTop: 5, justifyContent:'space-between' }}>
                                        <Text style={[styles.text1,{color:colors.text}]}>22 Feb - 28 Feb</Text>
                                        <Text style={[styles.rs,{color:colors.text}]}>Rs.185</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                        <Text style={[styles.week1,{color:colors.text}]}>This week Earning</Text>
                                        <Icon1 onPress={() => navigation.navigate("EarningDetail")} name="arrowright"
                                         size={20} style={{ marginRight:10,marginTop:10, color:colors.border }}></Icon1>
                                </View>
                                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                                        <Text style={[styles.payout,{color:colors.text}]}>Payout History</Text>
                                        <Icon1 name="arrowright" size={20} onPress={() => navigation.navigate("Payout")}
                                                style={{marginRight:10,marginTop:10, color: colors.border  }}></Icon1>
                                </View>
                        </View>
                        <View style={[styles.view5,{backgroundColor:colors.card}]}>
                                <View style={{ flexDirection: 'row', marginTop: 5, justifyContent:'space-between' }}>
                                        <Text style={[styles.text1,{color:colors.text}]}>15 Feb - 21 Feb</Text>
                                        <Text style={[styles.rs,{color:colors.text}]}>Rs.80</Text>
                                </View>

                                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                                        <Text style={[styles.text1,{color:colors.text}]}>Last week Earning</Text>
                                        <Icon1 onPress={() => navigation.navigate("EarningDetail")}  name="arrowright" size={20} style={{ marginRight:10,marginTop:10,
                                                color: colors.border  }}></Icon1>
                                </View>



                                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                                        <Text style={[styles.payout,{color:colors.text}]}>Payout History</Text>
                                        <Icon1 name="arrowright" onPress={() => navigation.navigate("Payout")}
                                                size={20} style={{ marginRight:10,marginTop:10, color: colors.border  }}></Icon1>
                                </View>
                        </View>

                </View>

        )
}
export default Earnings;

const styles = StyleSheet.create({
        view5: {
                marginBottom: 50,
                marginLeft: 30,
               
                backgroundColor: "white",
                borderRadius: 10,
                elevation: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                // paddingLeft: 120,
                padding: 10,
                marginTop: 10,
                marginRight: 30,

                //flexDirection:'row'

        },
        Earnings:{ 
                fontSize: 25, 
                marginBottom: 40,
                color: "#696969",
                fontFamily: "OpenSansBold", 
        },
        text1:{
                margin: 10, 
              
                fontFamily: "OpenSansRegular",
                color: "#696969",
                fontSize:17
        },
        rs:{
                margin: 10, 
               
                fontFamily: "OpenSansRegular",
                color: "#696969",
                fontSize:17
        },
        week1:{
                margin: 10, fontFamily: "OpenSansRegular",
                color: "#696969",
                fontSize:17
        },
        payout:{
                margin: 10, fontFamily: "OpenSansRegular",
                color: "#696969",
                fontSize:17
        }

})