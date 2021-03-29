import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme } from 'react-native-paper'

const Summary = ({navigation}) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 40, color: "#FDC913" }}></Icons>
                    </TouchableOpacity>
                    <Text style={[styles.Summary,{color:colors.text}]}>Delivery Summary</Text>
                </View>
                <View style={[styles.view3,{backgroundColor:colors.card}]}>
                    <Text style={[styles.text1,{color:colors.text}]}>Restaurant Name</Text>
                    <Text style={[styles.text1,{color:colors.text}]}>Address</Text>

                    <View style={[styles.view6,{backgroundColor:colors.card}]}>
                        <Text style={[styles.text1,{color:colors.text}]}>Order Details</Text>
                        <Text style={[styles.text1,{color:colors.text}]}>Food Items</Text>
                    </View>
                </View>
                <View style={[styles.view4,{backgroundColor:colors.card}]}>
                    <Text style={[styles.custom,{color:colors.text}]}>Customer Name</Text>
                    <Text style={[styles.address,{color:colors.text}]}>Address</Text>
                </View>

                <View style={[styles.view5,{backgroundColor:colors.card}]}>
                    <Text onPress={() => navigation.navigate("COD")}
                        style={[styles.amt,{color:colors.text}]}>Amount</Text>
                    <Text style={[styles.rs,{color:colors.text}]}>Rs.300</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Summary;

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
        marginTop: 0,
        marginRight: 30,
        flexDirection: 'row'

    },

    view6: {
        marginBottom: 30,
        marginLeft: 15,
        height: 100,
        width: "90%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        // paddingLeft: 120,
        padding: 10,
        marginTop: 20,
        marginRight: 30,

    },
    view4: {
        marginBottom: 30,
        marginLeft: 35,
        height: 120,
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
    view3: {
        marginBottom: 10,
        marginLeft: 35,
        height: 240,
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
        marginTop: 0,
        marginRight: 30,
        //flexDirection:'row'

    },
    Summary:{ 
        fontSize: 24,
        marginBottom: 40, 
        color: "#696969",
        fontFamily: "OpenSansBold", 
},
text1:{
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: "OpenSansRegular",
    color: "#696969"
},
address:{
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
    fontFamily: "OpenSansRegular",
    color: "#696969"
},
custom:{
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
    fontFamily: "OpenSansRegular",
    color: "#696969"
},
amt:{
    paddingLeft: 20,
    paddingTop: 5, 
    marginRight: 120, 
    fontSize: 16, 
    fontFamily: "OpenSansRegular",
    color: "#696969"
},
rs:{
    paddingTop: 5,
    fontSize: 16, 
    fontFamily: "OpenSansRegular",
    color: "#696969"
}

})