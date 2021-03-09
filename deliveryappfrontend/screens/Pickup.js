import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Pickup = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <StatusBar style={{ backgroundColor: colors.background }} barStyle={theme.dark ? "light-content" : "default"} />
            <View style={styles.textcontainer}>
            <Text style={styles.text}>Pickup</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.iconcontainer}>
                    <Icon style={styles.icon} name="restaurant" size={25} color="black" />
                    <Text style={styles.res}>Restaurant Name</Text>
                </View>
                <Text style={styles.add}>Address</Text>
                <View style={styles.detail}>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.order}>Order Details</Text>
                        <View>
                            <Text style={styles.item}>Food Items</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.padbutton}>
                <TouchableOpacity style={styles.inputButton}>
                    <Text
                        style={styles.button}
                    >Reached Pickup Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pickup


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,

    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: 'black',
        paddingBottom: 10,
        borderRadius: 100,
        // width: 140,
        alignSelf: "center",
        paddingLeft:10,
        paddingRight:10
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
    inputcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 30,
        borderRadius: 20
    },
    iconcontainer: {
        flexDirection: 'row',
    },
    icon: {
        paddingRight: 13
    },
    add: {
        paddingLeft: 40,
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15, 
    },
    detailcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        padding:20
    },
    detail:{
        paddingTop:20,
        paddingBottom:10,
        paddingLeft:40,
        paddingRight:40
    },
    res:{
        fontFamily: 'OpenSansBold',
        fontSize: 20,
    },
    order:{
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        paddingBottom:20
    },
    item:{
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        paddingLeft:20
    },
    text:{
        fontSize:25,
        fontFamily:'OpenSansBold',
        
    },
    textcontainer:{
        paddingBottom:50
    }
})