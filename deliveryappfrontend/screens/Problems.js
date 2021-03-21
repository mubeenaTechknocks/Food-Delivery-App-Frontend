import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';

const Problems = ({navigation}) => {
    return (
        <View style={{ paddingTop: 10, paddingBottom: 300 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 50, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, marginBottom: 40, color: "#696969", fontFamily: "OpenSansBold", }}>General Problems</Text>
            </View>

            <View style={styles.view5}>
                <Text onPress={() => navigation.navigate("ReportProblem")}
                    style={{ paddingLeft: 60,fontSize:18, color: "#696969", fontFamily: "OpenSansSemiBold", }}>Not Receiving Orders</Text>

            </View>


            <View style={styles.view5}>
                <Text onPress={() => navigation.navigate("ReportProblem")}
                    style={{paddingLeft: 120,fontSize:18, color: "#696969", fontFamily: "OpenSansSemiBold", }}>Others</Text>

            </View>
        </View>
    )
}

export default Problems;

const styles = StyleSheet.create({
    view5: {
        marginBottom: 50,
        marginLeft: 35,
        height: 50,
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
        flexDirection: 'row'

    },

})