import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper'

const LoginHistory = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={{ paddingTop: 10, paddingBottom: 400 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icons name="arrow-back" size={30} onPress={() => navigation.goBack()}
                        style={{ marginLeft: 20, marginRight: 70, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={[styles.login, { color: colors.text }]}>Login History</Text>
            </View>

            <View style={[styles.view5, { backgroundColor: colors.card }]}>
                <Text 
                    style={[styles.today, { color: colors.text }]}>Today so far </Text>
                <Text style={[styles.om, { color: colors.text }]}>OM</Text>
            </View>
            <Text style={[styles.past, { color: colors.text }]}>Past Login Information</Text>

            <View style={[styles.view4, { backgroundColor: colors.card }]}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <Text style={[styles.last, { color: colors.text }]}>This week</Text>
                    <Text style={[styles.hr2, { color: colors.text }]}>5 hr</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop:20 }}>
                    <Text style={[styles.date1, { color: colors.text }]}>05 Feb - 08 Feb</Text>
                    <Icon1 name="arrowright" size={15} onPress={() => navigation.navigate("WeekLogin")}
                        style={{ fontSize: 25, color: colors.border, }}></Icon1>
                </View>
            </View>

            <View style={[styles.view4, { backgroundColor: colors.card }]}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <Text style={[styles.last, { color: colors.text }]}>Last week</Text>
                    <Text style={[styles.hr, { color: colors.text }]}>6 hr</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop:20 }}>
                    <Text style={[styles.date, { color: colors.text }]}>Date</Text>
                    <Icon1 name="arrowright" size={15} onPress={() => navigation.navigate("WeekLogin")}
                        style={{ fontSize: 25, color: colors.border }}></Icon1>
                </View>
            </View>
        </View>
    )
}

export default LoginHistory;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 30,
        marginLeft: 30,
       
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        paddingTop: 10,
        
        marginRight: 30,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingBottom:10,
        paddingRight:20

    },
    view4: {
        marginBottom: 20,
        marginLeft: 30,
       
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        paddingTop: 10,
        marginTop: 20,
        marginRight: 30,
        paddingLeft:20,
        paddingBottom:10,
        paddingRight:20
       
    },
    login: {
        fontSize: 25,
        marginBottom: 40,
        color: "#696969",
        fontFamily: "OpenSansBold",
    },
    today: {
       
        fontSize: 15,
        fontFamily: "OpenSansRegular",
        color: "#696969"
    },
    date: {
        fontSize: 15,
       
        fontFamily: "OpenSansRegular",
        color: "#696969"
    },
    past: {
      marginLeft:20,
        fontSize: 20,
        fontFamily: "OpenSansSemiBold",
        color: "#696969"
    },
    om: {
       
        fontSize: 15,
        fontFamily: "OpenSansRegular",
        color: "#696969"
    },
    hr: {
        fontSize: 15,
        
        fontFamily: "OpenSansRegular",
        color: "#696969"
    },
    hr2: {
        fontSize: 15,
      
     
        fontFamily: "OpenSansRegular",
        color: "#696969"
    },
    last: {
        
        fontSize: 15,
        fontFamily: "OpenSansRegular",
        color: "#696969"
    },
    date1: {
        fontSize: 15,
      
        fontFamily: "OpenSansRegular",
        color: "#696969"
    }

})