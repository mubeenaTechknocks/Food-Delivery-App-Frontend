import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useTheme } from '@react-navigation/native';

const PickupCompleted = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={() => navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Pickup</Text>
            </View>
            <View style={styles.input}>
                <Collapse>
                    <CollapseHeader>
                        <View style={styles.inputcontainer}>
                            <Text style={styles.textinput}>Pickup Confirmed</Text>
                            <Icon name="down" size={15} color={colors.border} style={{marginTop:5}} />

                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={styles.inputcontainer1}>
                            <Text style={styles.textinput1}>1 * Milkshake</Text>
                            <Text style={styles.textinput1}>1 * Burger</Text>
                        </View>
                    </CollapseBody>
                </Collapse>
                <View style={styles.pad}></View>
                <Collapse>
                    <CollapseHeader>
                        <View style={styles.inputcontainer}>
                            <Text style={styles.textinput}>Payment Successfull</Text>
                            <Icon name="down" size={15} color={colors.border} style={{marginTop:5}} />
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View style={styles.inputcontainer1}>
                            <Text style={styles.textinput1}>Rs. 300 paid to Restaurant</Text>
                        </View>
                    </CollapseBody>
                </Collapse>
            </View>
            <View style={styles.padbutton}>
                <TouchableOpacity style={styles.inputButton}
                    onPress={() => navigation.navigate("DeliveryMap")}
                >
                    <Text
                        style={styles.button}
                    >Pickup Completed</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PickupCompleted


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color: '#696969'
    },
    textcontainer: {
        paddingBottom: 50,
        flexDirection: 'row'
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        alignSelf: "center",
        paddingLeft: 20,
        paddingRight: 20
    },

    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
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
        padding: 15,
        // borderRadius: 10,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    inputcontainer1: {
        backgroundColor: 'white',
        elevation: 2,
        padding: 20,
        // borderRadius: 10,
    },
    input: {
        paddingLeft: 20,
        paddingRight: 20
    },
    pad: {
        paddingTop: 50
    },
    textinput: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 20,
        alignSelf: 'center',
        color: '#696969'
    },
    textinput1: {
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        color: '#696969'
    },
    menu: {
        paddingRight: 100
    }
})