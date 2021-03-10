import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Deliver = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <StatusBar style={{ backgroundColor: colors.background }} barStyle={theme.dark ? "light-content" : "default"} />
            <View style={styles.textcontainer}>
            <Text style={styles.text}>Deliver</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.iconcontainer}>
                    <Icon style={styles.icon} name="delivery-dining" size={25} color="black" />
                    <Text style={styles.res}>Customer Name</Text>
                </View>
                <Text style={styles.add}>Address</Text>
                <View style={styles.iconcontainer1}>
                        <TouchableOpacity style={styles.icontouch}>
                            <Icon style={styles.icon1} name="call" size={25} color="black" />
                            <Text style={styles.icontext}>call</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.detail}>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.order}>Order Details</Text>
                        <View>
                            <Text style={styles.item}>1 * Milkshake</Text>
                            <Text style={styles.item}>1 * Burger</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.padbutton}>
                <TouchableOpacity style={styles.inputButton} onPress={()=>navigation.navigate("DeliveryCompleted")}>
                    <Text
                        style={styles.button}
                    >Reached Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Deliver


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
        fontSize: 18, 
        paddingTop:10
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
    },
    iconcontainer1: {
        paddingTop:20,
        paddingLeft:40,
        paddingRight:20
    },
    icontouch: {
        flexDirection: 'row'
    },
    icontext: {
        fontFamily: 'OpenSansRegular',
        fontSize: 20,
    },
    icon1:{
        paddingRight:20
    }
})