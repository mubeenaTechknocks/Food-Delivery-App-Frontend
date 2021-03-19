import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

const EarningDetail = ({ navigation }) => {
        return (
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingTop: 10, height:'100%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                                                <Icons name="arrow-back" size={30}
                                                        style={{ marginLeft: 20, marginRight: 20, color: "#FDC913" }}></Icons>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 22, marginBottom: 1, color: "#696969", fontFamily: "OpenSansBold", }}>Weekly Earning Details</Text>

                                </View>
                                <Text style={{ fontSize: 15, marginBottom: 20, marginLeft: 85, color: "#696969", fontFamily: "OpenSansSemiBold", }}>Last Week Earnings</Text>
                                <ScrollView
                                        horizontal={true}
                                        // style={styles.viewdir}
                                        showsHorizontalScrollIndicator={false}>
                                        <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.view5}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969",
                                                                textAlign:'center'
                                                        }}>Rs.855</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Total Earnings</Text>
                                                </View>
                                                <View style={styles.view5}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969",
                                                                textAlign:'center'
                                                        }}>Rs.567</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Order Earnings</Text>
                                                </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.view5}>
                                                        <Text style={{
                                                               fontFamily: "OpenSansRegular",
                                                               color: "#696969",
                                                               textAlign:'center'
                                                        }}>Rs.0</Text>
                                                        <Text style={{
                                                                 fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Bonus</Text>
                                                </View>
                                                <View style={styles.view5}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969",
                                                                textAlign:'center'
                                                        }}>Rs.0</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Incentives</Text>
                                                </View>
                                        </View>


                                        <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.view5}>
                                                        <Text style={{
                                                             fontFamily: "OpenSansRegular",
                                                             color: "#696969",
                                                             textAlign:'center'
                                                        }}>Rs.0</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Delivery Tip</Text>
                                                </View>
                                                <View style={styles.view5}>
                                                        <Text style={{
                                                             fontFamily: "OpenSansRegular",
                                                             color: "#696969",
                                                             textAlign:'center'
                                                        }}>Rs.50</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>COD</Text>
                                                </View>
                                        </View>
                                        </ScrollView>
                                        <View style={styles.view6}>
                                                <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 18, color: "#696969", fontFamily: "OpenSansSemiBold", }}>Wed, 20 Feb  </Text>
                                                        <Text style={{ marginTop: 5, marginLeft: 30, fontSize: 18, color: "#696969", fontFamily: "OpenSansSemiBold", }}>Rs. 317</Text>
                                                        <Icon3 name="up" size={20} style={{ marginLeft: 20, marginTop: 5, color: "#FDC913" }}></Icon3>
                                                </View>
                                                <View style={styles.View1}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                                <Text style={{
                                                                        marginLeft: 15, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Rs. 0</Text>
                                                                <Icon2 onPress={() => navigation.navigate("Summary")} name="arrowright" style={{ marginLeft: 20, marginTop: 20, color: "#FDC913" }} size={20}></Icon2>
                                                        </View>

                                                        <View style={{ flexDirection: 'row' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 16, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>

                                                <View style={styles.View1}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                                <Text style={{
                                                                        marginLeft: 15, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" style={{ marginLeft: 20, marginTop: 20, color: "#FDC913" }} size={20}></Icon2>
                                                        </View>

                                                        <View style={{ flexDirection: 'row' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 16, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: "#696969"
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>
                                        </View>


                                        <View style={styles.view4}>
                                                <Text onPress={() => navigation.navigate("COD")}
                                                        style={{
                                                                paddingLeft: 20, paddingTop: 5, marginRight: 90, fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Tue, 19 Feb</Text>
                                                <Text style={{
                                                        paddingTop: 5, fontFamily: "OpenSansRegular",
                                                        color: "#696969"
                                                }}>Rs.50</Text>
                                                <Icon1 name="check" size={15} style={{ paddingLeft: 10, paddingTop: 6, color: "#FDC913" }}></Icon1>
                                        </View>

                                        <View style={styles.view4}>
                                                <Text onPress={() => navigation.navigate("COD")}
                                                        style={{
                                                                paddingLeft: 20, paddingTop: 5, marginRight: 85, fontFamily: "OpenSansRegular",
                                                                color: "#696969"
                                                        }}>Mon, 18 Feb</Text>
                                                <Text style={{
                                                        paddingTop: 5, fontFamily: "OpenSansRegular",
                                                        color: "#696969"
                                                }}>Rs.20</Text>
                                                <Icon1 name="check" size={15} style={{ paddingLeft: 10, paddingTop: 6, color: "#FDC913" }}></Icon1>
                                        </View>
                                
                        </View>
                </ScrollView>
        )
}

export default EarningDetail;

const styles = StyleSheet.create({
        view5: {
                
                backgroundColor: "white",
                borderRadius: 10,
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                padding:10,
                marginRight:10,
                marginBottom:10
        },
        view4: {
               
                marginLeft: 35,
                marginBottom:30,
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
                flexDirection: 'row'

        },
        View1: {
                marginBottom: 10,
                marginLeft: 13,
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
                padding: 10,
                marginTop: 20,
                marginRight: 30,
                //flexDirection:'row'

        },
        view6: {
                marginBottom: 10,
                marginLeft: 35,
                height: 360,
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
