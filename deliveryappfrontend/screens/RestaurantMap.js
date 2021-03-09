import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Map from './Map'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useTheme } from '@react-navigation/native';

const RestaurantMap = ({navigation}) => {
    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
                <StatusBar style={{backgroundColor:colors.background}} barStyle={theme.dark ? "light-content" :"default"} />
            <View style={styles.mapcontainer}>
                <Map />
            </View>
            <View>
                <View style={styles.inputcontainer}>
                    <Icon name="restaurant" size={30} color="black" />
                    <Text style={styles.text} >Restaurant Name</Text>
                    <TouchableOpacity style={styles.iconcontainer}>
                        <Icon1 name="directions" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.add}>
                    <Text style={styles.addtext} >Address</Text>
                </View>
            </View>
        </View>
    )
}

export default RestaurantMap

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
    iconcontainer:{
        backgroundColor:'white',
        elevation:20,
       padding:2
    },
    add:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    },
    text:{
        fontFamily:'OpenSansBold',
        fontSize:20,
    },
    addtext:{
        fontFamily:'OpenSansSemiBold',
        fontSize:20,
    }

})