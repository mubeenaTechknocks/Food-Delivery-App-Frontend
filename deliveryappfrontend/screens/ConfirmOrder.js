import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ConfirmOrder = ({navigation}) => {

    const { colors } = useTheme()
    const theme = useTheme()
    
    return (
        <View style={[styles.container,{backgroundColor:colors.card}]}>
          <StatusBar style={{backgroundColor:colors.background}} barStyle={theme.dark ? "light-content" :"default"} />

            <View >
                <Text style={[styles.text,{color:colors.text}]}>Active Delivery</Text>
            </View>
            <View style={styles.inputcontainer}>
                <TouchableOpacity style={styles.iconcontainer} onPress={()=>{navigation.navigate("RestaurantMap")}}>
                    <Text style={styles.title}>Pick Up</Text>
                    <Icon name="caretright" size={25} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.caption}>Restaurant Name</Text>
                <Text style={styles.captionadd}>Address</Text>
            </View>
            <View style={styles.pad}></View>
            <View style={styles.inputcontainer}>
                <TouchableOpacity style={styles.iconcontainer}>
                    <Text style={styles.title}>Deliver</Text>
                    <Icon name="caretright" size={25} color="#FDC913" />
                </TouchableOpacity>
                <Text style={styles.caption}>Customer Name</Text>
                <Text style={styles.captionadd}>Address</Text>
            </View>
        </View>
    )
}

export default ConfirmOrder

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    text: {
        fontFamily: 'OpenSansBold',
        fontSize: 25,
        paddingBottom: 20

    },
    inputcontainer: {
        elevation:20,
        borderRadius: 10,
      
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor:'white'
    },
    pad: {
        paddingBottom: 50
    },
    title: {
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        color: '#FDC913',
    },
    caption: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: "OpenSansBold",
        fontSize:18
    },
    captionadd: {
        paddingLeft: 10,
        paddingBottom: 10,
        fontFamily: "OpenSansSemiBold",
        fontSize:16
    },
    iconcontainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    }


})