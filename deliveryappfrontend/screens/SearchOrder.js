import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import { DrawerActions, useTheme } from '@react-navigation/native';

const SearchOrder = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    return (
        <View style={styles.container}>
          
            <View>
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
                <View style={styles.menucontainer}>
                    <View style={styles.homecontainer}>

                        <View style={styles.start}>
                            <TouchableOpacity onPress={() => navigation.navigate("ActiveOrder")}>
                                <Icon2 name="spinner" size={60} color="#696969" style={styles.spinner} />
                                <Text style={styles.startcontainer}>Searching for Orders...</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pad}></View>
                        <View >
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
                        <View style={styles.pad1}></View>
                        <View style={styles.card}>
                            <Text style={styles.cardtext}>See your ID card</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Text style={styles.cardcontainer}>GO TO PROFILE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SearchOrder

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FDC913',
        height: '100%',
        // paddingLeft:20,
        // paddingRight:20
    },
    homecontainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
        paddingBottom: 30
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
        color: '#696969'
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
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 30,
        paddingRight:20,
        borderRadius: 20,
        elevation: 20,
    },
    startcontainer: {
        color: '#696969',
        paddingTop:10,
        alignSelf: "center",
        fontFamily: 'OpenSansSemiBold',
        fontSize: 20
    },
    spinner: {
        paddingLeft: 110
    },
    pad: {
        paddingBottom: 30,

    },
    pad1: {
        paddingBottom: 50,

    },
    card: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingLeft: 20,
        paddingBottom: 30,
        borderRadius: 20,
        elevation: 20

    },
    cardcontainer: {
        backgroundColor: '#FDC913',
        borderRadius: 10,
        padding: 10,
        color: 'white',
        elevation: 5,
        alignSelf: "center",
        fontFamily: 'OpenSansBold'
    },
    cardtext: {
        fontFamily: 'OpenSansSemiBold',
        paddingBottom: 20,
        fontSize: 18,
        alignSelf: 'center',
        color: '#696969'
    },
    menucontainer: {
        // backgroundColor: 'white',
        paddingBottom: 20,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40
    },
    shift: {
        backgroundColor: "#FDC913",
        justifyContent: 'center',
        borderRadius: 20,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        width: 130

    },
    shifttext: {
        color: 'white',
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        // borderBottomWidth:1,
        // borderBottomColor:'white'
    },
    logintext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        // borderBottomWidth:1,
        color: "#FDC913",
        // borderBottomColor:"#FDC913"
    },
    login: {
        paddingLeft: 50,
        paddingTop: 10
    }

})

