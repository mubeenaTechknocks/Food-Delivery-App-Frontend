import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Foundation'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import { DrawerActions, useTheme } from '@react-navigation/native';

const SearchOrder = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={theme.dark ? "light-content" : "dark-content"} />
            <View >
                <View style={styles.iconcontainer}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon name="menu" size={30} color="#FDC913" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon1}>
                        <Icon1 name="notifications" size={25} color="#FDC913" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon2}>
                        <Icon2 name="map" size={25} color="#FDC913" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon3}>
                        <Icon3 name="help-outline" size={25} color="#FDC913" />
                    </TouchableOpacity>

                </View>

                <View style={styles.start}>
                    <TouchableOpacity  >
                        <Text style={styles.startcontainer}>Searching for Orders</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.touch1} >
                        <Text style={styles.text}>Rs.50</Text>
                        <Text style={styles.text}>Today's Earning</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch1} >
                        <Text style={styles.text}>Rs.100</Text>
                        <Text style={styles.text}>Week's Earning</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.touch1}>
                        <Text style={styles.text}>Rs.10 </Text>
                        <Text style={styles.text}>COD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch1}>
                        <Text style={styles.text}>Rs.20</Text>
                        <Text style={styles.text}>Delivery Tip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.touch1} >
                        <Text style={styles.text}>Shift Details</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch1} >
                        <Text style={styles.text}>Login History</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.pad}></View>
                <View style={styles.card}>
                    <Text style={styles.cardtext}>See your ID card</Text>
                    <TouchableOpacity>
                        <Text style={styles.cardcontainer}>GO TO PROFILE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default SearchOrder

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10

    },
    iconcontainer: {
        flexDirection: 'row',
        paddingBottom: 30
    },
    option: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    touch1: {
        // textAlign: 'center',
        // borderWidth: 0.5,
        padding: 15,
        width: 160,
        marginLeft: 10,
        marginRight: 10,
        height: 70,
        backgroundColor: '#FDC913',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 2,
        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column'
    },
    text: {
        textAlign: 'center',

        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column',
        color: '#f5fffa'
    },
    icon1: {
        paddingLeft: 200,
        paddingRight: 25,
        paddingTop: 5
    },
    icon2: {
        paddingRight: 25,
        paddingTop: 5
    },
    icon3: {
        paddingTop: 5
    },
    start: {
        backgroundColor: '#FDC913',
        padding: 50,
        borderRadius: 20,
    },
    startcontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        // width: 106,
        elevation: 5,
        alignSelf: "center",
        fontFamily: 'OpenSansBold'
    },
    pad: {
        paddingBottom: 20,

    },
    card: {
        backgroundColor: '#FDC913',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 50,
        borderRadius: 20

    },
    cardcontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width:130,
        elevation: 5,
        // alignSelf:"center",
        fontFamily: 'OpenSansBold'
    },
    cardtext: {
        fontFamily: 'OpenSansSemiBold',
        paddingBottom: 20,
        fontSize: 18
    }

})