import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';

const Shift = ({ navigation }) => {
    return (
        <View style={{ paddingTop: 10, paddingBottom: 300 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Icons name="arrow-back" size={30} 
                            style={{ marginLeft: 20, marginRight: 80, color: "#FDC913" }}></Icons>
              </TouchableOpacity>
                <Text style={{ fontSize: 24, marginBottom: 40, color: "#696969", fontFamily: "OpenSansBold" }}>Shift Timing</Text>
            </View>

            <View style={styles.view5}>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 15 }}>
                    <Text onPress={() => navigation.navigate("COD")}
                        style={{
                            paddingLeft: 20, paddingTop: 5, color: "#696969",
                            fontFamily: "OpenSansSemiBold",
                            marginRight: 20, fontSize: 16
                        }}>This week </Text>
                    <Text style={{
                        paddingTop: 5, fontSize: 16, color: "#696969",
                        fontFamily: "OpenSansSemiBold"
                    }}>03 Feb - 05 Feb</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text onPress={() => navigation.navigate("COD")}
                        style={{
                            paddingLeft: 20, paddingTop: 5, marginRight: 20, color: "#696969",
                            fontFamily: "OpenSansSemiBold",
                            fontSize: 16
                        }}>Shift Time </Text>
                    <Text style={{
                        paddingTop: 5, fontSize: 16, color: "#696969",
                        fontFamily: "OpenSansSemiBold"
                    }}>6.00 pm - 11.00 pm </Text>
                </View>
            </View>
        </View>
    )
}

export default Shift;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 50,
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