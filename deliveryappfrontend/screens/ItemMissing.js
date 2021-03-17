import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, Checkbox, useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'


const ItemMissing = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.textcontainer}>
                <Text style={styles.text}>Item Missing</Text>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.iconcontainer}>

                    <Text style={styles.res}>Order Details</Text>
                </View>

                <View style={styles.detail}>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.order}>Food Items</Text>
                        <View style={styles.ordercontainer}>
                            <Text style={styles.item}>1 * Milkshake</Text>
                            <Checkbox
                                status={item1 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setItem1(!item1);
                                }}
                                color="#FDC913"
                            />
                        </View>
                        <View style={styles.ordercontainer}>
                            <Text style={styles.item}>1 * Milkshake</Text>
                            <Checkbox
                                status={item2 ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setItem2(!item2);
                                }}
                                color="#FDC913"
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.pad}>
                    <TouchableOpacity style={styles.detailcontainer}>
                        <Text style={styles.add}>Send Notification to Restaurant</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default ItemMissing


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,

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
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        alignSelf: 'center',
        color: "#696969"
    },
    detailcontainer: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        padding: 20
    },
    detail: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40
    },
    res: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: "#696969"
    },
    order: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        color: "#696969"
        // alignSelf:'center'
    },
    item: {
        fontFamily: 'OpenSansRegular',
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 10,
        color: "#696969"
    },
    text: {
        fontSize: 25,
        fontFamily: 'OpenSansBold',
        color: "#696969"
    },
    textcontainer: {
        paddingBottom: 50
    },
    pad: {
        paddingTop: 30
    },
    ordercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})