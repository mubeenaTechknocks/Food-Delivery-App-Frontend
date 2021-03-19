import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';


const Notification = ({navigation}) => {
    return (
        <View style={{ paddingTop: 10, paddingBottom: 400 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
                    <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 70, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, marginBottom: 40, fontFamily: "OpenSansBold", color: "#696969" }}>Notification</Text>
            </View>

            <View style={styles.view5}>
                <Text onPress={() => navigation.navigate("COD")}
                    style={{
                        paddingLeft: 20, paddingTop: 5, marginRight: 90, color: "#696969",
                        fontSize: 18, marginBottom: 20, fontFamily: "OpenSansSemiBold",
                    }}>Restaurant Name</Text>

                <TouchableOpacity style={{ paddingTop: 5 }} onPress={() => navigation.navigate("ActiveOrder")}>
                    <Text style={{
                        backgroundColor: "#FDC913", fontSize: 15, fontFamily: "OpenSansBold",
                        color: "white", height: 38, paddingTop: 8, 
                        paddingLeft: 36, paddingRight: 20, paddingBottom: 10,
                        borderRadius: 20, width: "46%", marginLeft: 125, marginTop: 20
                    }}>Pickup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Notification;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 50,
        marginLeft: 35,
        height: 160,
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