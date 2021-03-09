import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/EvilIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ActiveOrder = ({navigation}) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={[styles.container,{backgroundColor:colors.card}]}>
             <StatusBar style={{backgroundColor:colors.background}} barStyle={theme.dark ? "light-content" :"default"} />
            <Text style={[styles.text,{color:colors.text}]}>Active Delivery</Text>
            <View style={styles.input}>
                <View style={styles.heading}>
                    <Text style={styles.txt}>2.3 km</Text>
                    <Text style={styles.txtline}>|</Text>
                    <Text style={styles.txt}>40 min</Text>
                    <Text style={styles.txt1}>Rs. 60</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.space}>
                    <View style={styles.heading1}>
                        <Text style={styles.bold} >5.4 km</Text>
                        <Text style={styles.bold}>5.0 km</Text>
                    </View>
                    <View style={styles.heading1}>
                        <Text style={styles.regular}>Pick up</Text>
                        <Text style={styles.regular}>Deliver</Text>
                    </View>
                </View>
                <View style={styles.name}>
                    <View style={styles.heading1}>
                        <Text style={styles.regular}>To Restaurant</Text>
                        <Text style={styles.bold}>Rs. 40</Text>

                    </View>
                    <View style={styles.heading1}>
                        <Text style={styles.regular}>Long Distance</Text>
                        <Text style={styles.bold}>Rs. 20</Text>

                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.space}>
                    <View style={styles.pad}>
                        <View style={styles.row}>
                            <Icon  style={styles.icon} name="restaurant" size={25} color="black" />
                            <Text style={styles.semi}>Restaurant Name</Text>
                        </View>
                        <Text style={styles.add}>Address</Text>
                    </View>
                    <View>
                        <View style={styles.row}>
                            <Icon style={styles.icon} name="delivery-dining" size={25} color="black"/>
                            <Text style={styles.semi}>Customer Name</Text>
                        </View>
                        <Text style={styles.add}>Address</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={styles.space}>
                   <Text style={styles.bold1}>Order Details</Text>
                   <View style={styles.order}>
                       <Text style={styles.regular}>1 *    Milk Shake</Text>
                       <Text style={styles.regular}>1 *    Burger</Text>
                   </View>

                </View>
            </View>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.buttonconfirm} onPress={()=>navigation.navigate("ConfirmOrder")}>
                    <Text style={styles.buttontext}>Confirm order</Text>
                    <Icon1 style={styles.buttonicon} name="check" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonreject} onPress={()=>navigation.navigate("SearchOrder")}>
                    <Text style={styles.buttontext}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        elevation:20,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingRight: 20,
        paddingBottom: 10,
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
        borderBottomColor: 'black',
        borderBottomWidth: 1

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
    txt:{
        paddingBottom:5,
        fontFamily:'OpenSansBold',
        fontSize:20,

    },
    txtline:{
        fontWeight:'bold',
        fontSize:25,
        paddingLeft:20,
        paddingRight:20
    },
    txt1:{
        fontSize:20,
        fontFamily:'OpenSansBold',
        paddingLeft:70
    },
    bold:{
        fontFamily:'OpenSansBold',
        fontSize:15
    },
    bold1:{
        fontFamily:'OpenSansBold',
        fontSize:20
    },
    regular:{
        fontFamily:'OpenSansRegular',
        fontSize:15
    },
    semi:{
        fontFamily:'OpenSansSemiBold',
        fontSize:18 
    },
    order:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20
    },
    icon:{
        paddingRight:10
    },
    add:{
        fontFamily:'OpenSansRegular',
        fontSize:15 ,
        paddingLeft:37
    },
    text:{
        fontFamily: 'OpenSansBold',
        fontSize: 25,
        paddingBottom: 30
    },
    buttoncontainer:{
        paddingTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonconfirm:{
        backgroundColor:'green',
        padding:10,
        borderRadius:30,
        width:170,
        flexDirection:'row'
    },
    buttonreject:{
        backgroundColor:'red',
        padding:10,
        borderRadius:30,
        width:170,
       
    },
    buttontext:{
        fontFamily: 'OpenSansBold',
        fontSize: 18,
        color:'white',
        alignSelf:'center'
        
    },
    buttonicon:{
        paddingLeft:3,
        paddingTop:6
    }

    
})