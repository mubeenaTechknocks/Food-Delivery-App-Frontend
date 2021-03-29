import React from 'react'
import { View, Text, StyleSheet, StatusBar,ScrollView} from 'react-native'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/EvilIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ActiveOrder = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            
            <Text style={[styles.text,{color:colors.text}]}>Active Delivery</Text>
            <View style={[styles.input,{backgroundColor:colors.card}]}>
                <View style={styles.heading}>
                    <Text style={[styles.txt,{color:colors.text}]}>2.3 km</Text>
                    <Text style={[styles.txtline,{color:colors.text}]}>|</Text>
                    <Text style={[styles.txt,{color:colors.text}]}>40 min</Text>
                    <Text style={[styles.txt1,{color:colors.text}]}>Rs. 60</Text>
                </View>
                <View style={[styles.line,{borderBottomColor:colors.text}]}></View>
                <View style={styles.space}>
                    <View style={styles.heading1}>
                        <Text style={[styles.bold,{color:colors.text}]} >5.4 km</Text>
                        <Text style={[styles.bold,{color:colors.text}]}>5.0 km</Text>
                    </View>
                    <View style={styles.heading1}>
                        <Text style={[styles.regular,{color:colors.text}]}>Pick up</Text>
                        <Text style={[styles.regular,{color:colors.text}]}>Deliver</Text>
                    </View>
                </View>
                <View style={styles.name}>
                    <View style={styles.heading1}>
                        <Text style={[styles.regular,{color:colors.text}]}>To Restaurant</Text>
                        <Text style={[styles.bold,{color:colors.text}]}>Rs. 40</Text>

                    </View>
                    <View style={styles.heading1}>
                        <Text style={[styles.regular,{color:colors.text}]}>Long Distance</Text>
                        <Text style={[styles.bold,{color:colors.text}]}>Rs. 20</Text>

                    </View>
                </View>
                <View style={[styles.line,{borderBottomColor:colors.text}]}></View>
                <View style={styles.space}>
                    <View style={styles.pad}>
                        <View style={styles.row}>
                            <Icon style={styles.icon} name="restaurant" size={25} style={{color:colors.text}} />
                            <Text style={[styles.semi,{color:colors.text}]}>Restaurant Name</Text>
                        </View>
                        <Text style={[styles.add,{color:colors.text}]}>Address</Text>
                    </View>
                    <View>
                        <View style={styles.row}>
                            <Icon style={styles.icon} name="delivery-dining" size={25} style={{color:colors.text}} />
                            <Text style={[styles.semi,{color:colors.text}]}>Customer Name</Text>
                        </View>
                        <Text style={[styles.add,{color:colors.text}]}>Address</Text>
                    </View>
                </View>
                <View style={[styles.line,{borderBottomColor:colors.text}]}></View>
                <View style={styles.space}>
                    <Text style={[styles.bold1,{color:colors.text}]}>Order Details</Text>
                    <View style={styles.order}>
                        <Text style={[styles.regular,{color:colors.text}]}>1 *    Milk Shake</Text>
                        <Text style={[styles.regular,{color:colors.text}]}>1 *    Burger</Text>
                    </View>

                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={[styles.buttonconfirm,{backgroundColor:colors.primary}]}
                     onPress={() => navigation.navigate("ConfirmOrder")}>
                        <Text style={styles.buttontext}>Confirm</Text>
                        {/* <Icon1 style={styles.buttonicon} name="check" size={20} color="white" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonreject,{backgroundColor:colors.primary}]} onPress={() => navigation.navigate("SearchOrder")}>
                        <Text style={styles.buttontext}>Reject</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        </ScrollView>
    )
}

export default ActiveOrder

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    input: {
        borderRadius: 10,
        elevation: 20,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20
    },
    heading: {
        flexDirection: 'row',

    },
    heading1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line: {
        borderBottomColor: '#696969',
        borderBottomWidth: 1,
        // color:'#696969'
    },
    space: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20
    },
    name: {
        paddingTop: 20,
        paddingLeft: 40,
        paddingBottom: 20,
        paddingRight: 80
    },
    pad: {
        paddingBottom: 80
    },
    row: {
        flexDirection: 'row'
    },
    txt: {
        paddingBottom: 5,
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: '#696969'

    },
    txtline: {
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#696969'
    },
    txt1: {
        fontSize: 20,
        fontFamily: 'OpenSansBold',
        paddingLeft: 70,
        color: '#696969'
    },
    bold: {
        fontFamily: 'OpenSansBold',
        fontSize: 15,
        color: '#696969'
    },
    bold1: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: '#696969'
    },
    regular: {
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        color: '#696969'
    },
    semi: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        color: '#696969',
        paddingLeft:10
    },
    order: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },
    icon: {
        paddingRight: 10
    },
    add: {
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        paddingLeft: 37,
        color: '#696969'
    },
    text: {
        fontFamily: 'OpenSansBold',
        fontSize: 25,
        paddingBottom: 30,
        color: '#696969'
    },
    buttoncontainer: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:30,
        paddingLeft:30
    },
    buttonconfirm: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 30,
        width: 100,
        flexDirection: 'row'
    },
    buttonreject: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 30,
        width: 100,

    },
    buttontext: {
        fontFamily: 'OpenSansBold',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'

    },
    buttonicon: {
        paddingLeft: 3,
        paddingTop: 6
    }


})