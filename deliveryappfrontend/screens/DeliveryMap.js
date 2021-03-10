import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Map from './Map'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useTheme } from '@react-navigation/native';

const DeliveryMap = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <StatusBar style={{ backgroundColor: colors.background }} barStyle={theme.dark ? "light-content" : "default"} />
            <View style={styles.mapcontainer}>
                <Map />
            </View>
            <View>
                <View style={styles.inputcontainer}>
                    <Icon style={styles.icon} name="delivery-dining" size={35} color="black" />
                    <Text style={styles.text}>Delivery Location</Text>
                    <TouchableOpacity style={styles.iconcontainer} onPress={()=>navigation.navigate("Deliver")}>
                        <Icon1 name="directions" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.addcontainer}>
                    <Text style={styles.addtext}>Customer Name</Text>
                    <Text style={styles.add}>Address</Text>
                    <View style={styles.iconcontainer1}>
                        <TouchableOpacity style={styles.icontouch}>
                            <Icon style={styles.icon} name="call" size={30} color="black" />
                            <Text style={styles.icontext}>call</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DeliveryMap

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    mapcontainer: {
        height: 450
    },
    inputcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        paddingBottom: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    iconcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        padding: 2
    },
    addcontainer: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    text: {
        fontFamily: 'OpenSansBold',
        fontSize: 25,
    },
    addtext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 20,
    },
    add: {
        fontFamily: 'OpenSansRegular',
        fontSize: 20,
        paddingTop: 10
    },
    iconcontainer1: {
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20
    },
    icontouch: {
        flexDirection: 'row'
    },
    icontext: {
        fontFamily: 'OpenSansRegular',
        fontSize: 20,
    },
    icon:{
        paddingRight:20
    }

})