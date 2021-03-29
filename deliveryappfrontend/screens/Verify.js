import React, { useState, createRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import OTPTextView from 'react-native-otp-textinput';
import { DrawerActions, useTheme } from '@react-navigation/native';
const Verify = ({navigation}) => {

    
    const { colors } = useTheme()
    const theme = useTheme()

    const [inputOtp, setInputOtp] = useState('');

    const inputOtpRef = createRef();

    const handleInputOtp = () => {

        if (!inputOtp) {
            alert('Please Enter Correct Otp ');
            return;
        }
        // var dataToSend = {
        //     otp: inputOtp,
        //     id:uid

        // };
        // fetch("http:///192.168.1.8:3000/verify", {
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
        //         if (data.result.status === 200) {
        //             console.log(data.result.message);
        //             alert('OTP Success');
        //             values.useremail=data.result.message.email
        //             values.username=data.result.message.name
        //             values.userphone=data.result.message.phone
        //             navigation.navigate('Location')
        //             //navigation.navigate('MainScreen')
        //         } else {
        //             console.log('Otp Unsuccessful');
        //             alert('OTP Unsuccessful');
        //         }
        //     }).catch((error) => {
        //         console.log(error);
        //     });

        navigation.navigate('HomeDrawer')
    }
    return (
        <View style={styles.container}>
            
            <Text style={[styles.text,{color:colors.text}]} >Enter OTP</Text>
            <View style={[styles.containerinput,{backgroundColor:colors.card}]}>
                <OTPTextView
                    style={[styles.textInput,{color:colors.text,borderBottomColor:colors.border}]}
                    keyboardType="number-pad"
                    inputCount={6}
                    handleTextChange={(inputOtp) => setInputOtp(inputOtp)}
                    ref={inputOtpRef}
                    tintColor="black"

                />
                <View style={styles.padbutton}>
                    <TouchableOpacity style={[styles.inputButton,{backgroundColor:colors.primary}]}>
                        <Text
                            style={styles.button}
                            onPress={handleInputOtp}>VERIFY</Text>
                    </TouchableOpacity>
                    <View style={styles.register}>
                        <Text style={[styles.registertext,{color:colors.text}]}>Don't Receive ? </Text>
                        <TouchableOpacity>
                            <Text style={[styles.registertext,{color:colors.text}]}>Resend Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'white',
        height: '100%',
        // paddingTop: 250,
        // paddingLeft: 20,
        // paddingRight: 20
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerinput: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        width:300,
        elevation:20
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        width: 150,
        alignSelf: "center"
    },
    button: {
        fontFamily: 'OpenSansBold',
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    padbutton: {
        paddingTop: 50,
        paddingBottom: 50
    },
    text: {
        paddingBottom: 50,
        fontFamily: 'OpenSansBold',
        alignSelf: 'center',
        fontSize: 25,
        color:'#696969'
    },
    register: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 20
    },
    registertext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        color:'#696969'
    },
    textInput: {
        paddingTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#FDC913"
    }

})

export default Verify;