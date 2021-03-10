import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const PickupCompleted = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Text style={styles.text}>Pickup</Text>
            </View>
            <View style={styles.input}>
                <TouchableOpacity style={styles.inputcontainer}>
                    <Text style={styles.textinput}>Pickup Confirmed</Text>
                </TouchableOpacity>
                <View style={styles.pad}></View>
                <TouchableOpacity style={styles.inputcontainer}>
                    <Text style={styles.textinput}>Payment Successfull</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.padbutton}>
                <TouchableOpacity style={styles.inputButton}
                 onPress={()=>navigation.navigate("DeliveryMap")}
                 >
                    <Text
                        style={styles.button}
                    >Pickup Completed</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PickupCompleted


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
    },
    textcontainer: {
        paddingBottom: 50
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: 'black',
        paddingBottom: 10,
        borderRadius: 100,
        alignSelf: "center",
        paddingLeft:20,
        paddingRight:20
    },

    button: {
        fontFamily: 'OpenSansBold',
        color: '#FDC913',
        fontSize: 18,
        alignSelf: 'center'
    },
    padbutton: {
        paddingTop: 50,
        paddingBottom: 20
    },
    inputcontainer:{
        backgroundColor:'white',
        elevation:20,
        padding:20,
        borderRadius:20,
    },
    input:{
        paddingLeft:20,
        paddingRight:20
    },
    pad:{
        paddingTop:20
    },
    textinput:{
        fontFamily:'OpenSansSemiBold',
        fontSize:20,
        alignSelf:'center'
    }
})