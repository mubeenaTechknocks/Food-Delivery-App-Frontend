import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Ionicons'

import { DrawerActions, useTheme } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={theme.dark ? "light-content" : "dark-content"} />
            <View >
                <View style={styles.iconcontainer}>
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon name="dots-three-vertical" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon1}>
                        <Icon1 name="notifications" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon2}>
                        <Icon1 name="location-sharp" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon3}>
                        <Icon1 name="help-circle" size={25} color="black" />
                    </TouchableOpacity>

                </View>
                <View style={styles.homecontainer}>

                    <View style={styles.start}>
                        <TouchableOpacity onPress={() => navigation.navigate("SearchOrder")} >
                            <Text style={styles.startcontainer}>START DUTY</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pad}></View>
                    <View style={styles.menucontainer}>
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
                            <TouchableOpacity style={styles.shift} >
                                <Text style={styles.shifttext}>Shift Details</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.login} >
                                <Text style={styles.logintext}>Login History</Text>

                            </TouchableOpacity>
                        </View>
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
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDC913',
        height:'100%'
    },
    homecontainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        // backgroundColor:'white'
    },
    iconcontainer: {
        flexDirection: 'row',
        // paddingBottom:30,
        backgroundColor: 'white',
        elevation: 5,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10
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
        width: 146,
        marginLeft: 10,
        marginRight: 10,
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        elevation: 8,
        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column'
    },
    text: {
        textAlign: 'center',

        fontSize: 15,
        fontFamily: 'OpenSansSemiBold',
        flexDirection: 'column',
        color: 'black'
    },
    icon1: {
        paddingLeft: 200,
        paddingRight: 25,
        // paddingTop:5
    },
    icon2: {
        paddingRight: 25,
        // paddingTop:5
    },
    icon3: {
        // paddingTop:5
    },
    start: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 20,
        elevation:10
    },
    startcontainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
        color: '#FDC913',
        elevation: 5,
        alignSelf: "center",
        fontFamily: 'OpenSansBold'
    },
    pad: {
        paddingBottom: 30,

    },
    card: {
        backgroundColor: 'white',
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 50,
        borderRadius: 20,
        elevation:10

    },
    cardcontainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
        color: '#FDC913',
        elevation: 5,
        alignSelf: "center",
        fontFamily: 'OpenSansBold'
    },
    cardtext: {
        fontFamily: 'OpenSansSemiBold',
        paddingBottom: 20,
        fontSize: 18,
        alignSelf: 'center',
        color: 'black'
    },
    menucontainer: {
        backgroundColor: 'white',
        paddingBottom: 20,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        elevation:10
    },
    shift: {
        backgroundColor: "black",
        justifyContent: 'center',
        borderRadius: 20,
        height:40,
        paddingLeft:20,
        paddingRight:20,
        width:130

    },
    shifttext:{
        color:'#FDC913',
        fontFamily:'OpenSansSemiBold',
        fontSize:15,
        borderBottomWidth:1,
        borderBottomColor:'#FDC913'
    },
    logintext:{
        fontFamily:'OpenSansSemiBold',
        fontSize:15,
        borderBottomWidth:1
    },
    login:{
        paddingLeft:50,
        paddingTop:10
    }

})