import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';

const EarningDetail = ({ navigation }) => {
        const { colors } = useTheme()
        const theme = useTheme()

        return (
                <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingTop: 10, height: '100%' }}>
                                <View style={{ flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                                <Icons name="arrow-back" size={30}
                                                        style={{ marginLeft: 20, marginRight: 20, color: "#FDC913" }}></Icons>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 22, marginBottom: 1, color: colors.text, fontFamily: "OpenSansBold", }}>Weekly Earning Details</Text>

                                </View>
                                <Text style={{ fontSize: 15, marginBottom: 20, marginLeft: 85, color: colors.text, fontFamily: "OpenSansSemiBold", }}>Last Week Earnings</Text>
                                <ScrollView
                                        horizontal={true}
                                        // style={styles.viewdir}
                                        showsHorizontalScrollIndicator={false}>
                                        <View style={{ flexDirection: 'row' }}>
                                                <View style={[styles.view5, { backgroundColor: colors.card }]}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                                textAlign: 'center'
                                                        }}>Rs.855</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Total Earnings</Text>
                                                </View>
                                                <View style={[styles.view5, { backgroundColor: colors.card }]}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                                textAlign: 'center'
                                                        }}>Rs.567</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Order Earnings</Text>
                                                </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                                <View style={[styles.view5, { backgroundColor: colors.card }]}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                                textAlign: 'center'
                                                        }}>Rs.0</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Bonus</Text>
                                                </View>
                                                <View style={[styles.view5, { backgroundColor: colors.card }]}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                                textAlign: 'center'
                                                        }}>Rs.0</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Incentives</Text>
                                                </View>
                                        </View>


                                        <View style={{ flexDirection: 'row' }}>
                                                <View style={[styles.view5, { backgroundColor: colors.card }]}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                                textAlign: 'center'
                                                        }}>Rs.0</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Delivery Tip</Text>
                                                </View>
                                                <View style={[styles.view5, { backgroundColor: colors.card }]}>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                                textAlign: 'center'
                                                        }}>Rs.50</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>COD</Text>
                                                </View>
                                        </View>
                                </ScrollView>
                                <Collapse>

                                        <CollapseHeader>

                                                <View style={[styles.view4, { backgroundColor: colors.card }]} >
                                                        <Text
                                                                style={{
                                                                        paddingLeft: 20, marginRight: 85, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }} >wed, 20 Feb</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Rs.20</Text>
                                                        <Icon1 name="down" size={15} style={{ color: "#FDC913" }}></Icon1>
                                                </View>

                                        </CollapseHeader>
                                        <CollapseBody>

                                                <View style={[styles.View1, { backgroundColor: colors.card }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginLeft: 20, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" onPress={() => navigation.navigate("Summary")} style={{ marginLeft: 20, marginTop: 20, color: colors.border }} size={20}></Icon2>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>



                                                <View style={[styles.View1, { backgroundColor: colors.card }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginLeft: 20, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" onPress={() => navigation.navigate("Summary")} style={{ marginLeft: 20, marginTop: 20, color: colors.border }} size={20}></Icon2>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>

                                        </CollapseBody>
                                </Collapse>



                                <Collapse>
                                        <CollapseHeader>
                                                <View style={[styles.view4, { backgroundColor: colors.card }]}>
                                                        <Text
                                                                style={{
                                                                        paddingLeft: 20, marginRight: 85, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Tue, 19 Feb</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Rs.20</Text>
                                                        <Icon1 name="down" size={15} style={{ color: "#FDC913" }}></Icon1>
                                                </View>


                                        </CollapseHeader>

                                        <CollapseBody>

                                                <View style={[styles.View1, { backgroundColor: colors.card }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginLeft: 20, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" onPress={() => navigation.navigate("Summary")} style={{ marginLeft: 20, marginTop: 20, color: colors.border }} size={20}></Icon2>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>


                                                <View style={[styles.View1, { backgroundColor: colors.card }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginLeft: 20, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" onPress={() => navigation.navigate("Summary")} style={{ marginLeft: 20, marginTop: 20, color: colors.border }} size={20}></Icon2>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>


                                        </CollapseBody>
                                </Collapse>


                                <Collapse>
                                        <CollapseHeader>
                                                <View style={[styles.view4, { backgroundColor: colors.card }]} >
                                                        <Text
                                                                style={{
                                                                        paddingLeft: 20, marginRight: 85, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Mon, 18 Feb</Text>
                                                        <Text style={{
                                                                fontFamily: "OpenSansRegular",
                                                                color: colors.text,
                                                        }}>Rs.20</Text>
                                                        <Icon1 name="down" size={15} style={{ color: "#FDC913" }}></Icon1>
                                                </View>


                                        </CollapseHeader>

                                        <CollapseBody>

                                                <View style={[styles.View1, { backgroundColor: colors.card }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginLeft: 20, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" onPress={() => navigation.navigate("Summary")} style={{ marginLeft: 20, marginTop: 20, color: colors.border }} size={20}></Icon2>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>


                                                <View style={[styles.View1, { backgroundColor: colors.card }]}>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginLeft: 20, marginTop: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Restaurant Name</Text>
                                                                <Text style={{
                                                                        marginTop: 20, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Rs. 0</Text>
                                                                <Icon2 name="arrowright" onPress={() => navigation.navigate("Summary")} style={{ marginLeft: 20, marginTop: 20, color: colors.border }} size={20}></Icon2>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 20, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Time</Text>
                                                                <Text style={{
                                                                        marginTop: 10, marginLeft: 90, fontFamily: "OpenSansRegular",
                                                                        color: colors.text,
                                                                }}>Delivered</Text>
                                                        </View>
                                                </View>
                                        </CollapseBody>
                                </Collapse>
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
                padding: 10,
                marginRight: 10,
                marginBottom: 10
        },
        view4: {

                marginLeft: 30,
                marginBottom: 30,
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
                flexDirection: 'row',
                justifyContent: 'space-between'

        },
        View1: {
                paddingBottom: 30,
                marginLeft: 30,
                marginBottom: 10,

                backgroundColor: "white",
                borderRadius: 10,
                elevation: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                // paddingLeft: 120,
                paddingTop: 10,
                paddingRight: 20,
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
