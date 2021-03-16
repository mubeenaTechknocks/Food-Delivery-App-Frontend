import React, { useState, createRef } from 'react'
import { View, Text, TextInput, StyleSheet, Keyboard, TouchableOpacity, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'

const CashonDelivery = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    const [amount, setAmount] = useState('');
    const [reamount, setReamount] = useState('');

    const [errortext, setErrortext] = useState('');

    const amountInputRef = createRef();
    const reamountInputRef = createRef();
    const handleSubmitPress = () => {
        setErrortext('');
        if (!amount) {
            alert('Please Enter the Amount');
            return;
        }
        if (!reamount) {
            alert('Please Re-enter the Amount');
            return;
        }
        

        var dataToSend = {
            amount: amount,
            reamount: reamount,
           
        };

        // fetch("http://192.168.1.8:4000/login", {
        //     method: 'POST',
        //     mode: "cors",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',

        //     },
        //     body: JSON.stringify(dataToSend),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data)
        //         if (data.result.status === 200) {
        //             console.log('Login Successful');
        //             console.log(data.result.record._id);

        //             values.isLoginSuccess = true
        //             navigation.navigate('verify', { id: data.result.record._id })


        //         } else {
        //             console.log('Login Unsuccessful');
        //             navigation.navigate('Signup')

        //         }

        //     }).catch((error) => {
        //         console.log(error);
        //     });
        navigation.navigate("DeliveryCompleted")
    }

    return (
        <View style={styles.container}>            
     
            <View style={styles.inputcontainer}>
                <View style={styles.registercontainer}>
                    <Text style={styles.text}>Collect Cash on Delivery</Text>
                </View>
                <View style={styles.padcontainer}>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Enter Amount</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            onChangeText={(amount) => setAmount(amount)}
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            ref={amountInputRef}
                            onSubmitEditing={() =>
                                reamountInputRef.current &&
                                reamountInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Re-enter Amount</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            onChangeText={(reamount) => setReamount(reamount)}
                            maxLength={10}
                            returnKeyType="next"
                            ref={reamountInputRef}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false} />
                        <View style={styles.line}></View>
                    </View>
                </View>
                <View style={styles.padbutton}>
                        <TouchableOpacity style={styles.inputButton} onPress={()=>navigation.navigate("DeliveryCompleted")}>
                            <Text
                                style={styles.button}
                                onPress={handleSubmitPress}>Cash Collected</Text>
                        </TouchableOpacity>
                    </View>
            </View>
</View>
        
    )
}

export default CashonDelivery

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30

    },
    // inputcontainer: {
    //     backgroundColor: 'white',
    //     borderRadius: 10,
    //     elevation: 5
    // },
    // padcontainer: {
    //     paddingTop: 20,
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     paddingBottom:10


    // },
    text: {
        fontFamily: 'OpenSansBold',
        alignSelf: 'center',
        fontSize: 20,
        color:'#696969'
    },

    textinput: {
        paddingBottom: 20
    },

    textstyle: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingBottom: 10,
        color:'#696969'

    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#696969'
    },
    textinputdelivery: {
        flexDirection: 'row',
    },
    textstyledelivery: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingTop: 6,

    },
    textstyledelivery1: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingTop: 6,
        paddingRight:35

    },
    textstyledelivery2: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingTop: 6,
        paddingRight:50

    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        // width: 140,
        alignSelf: "center",
        paddingLeft:20,
        paddingRight:20

    },

    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    padbutton: {
        paddingTop: 10,
        paddingBottom: 20
    },
    registercontainer: {
        // backgroundColor: '#FDC913',
        paddingBottom: 50,
        paddingTop: 5,
        // marginLeft:10

    }

})