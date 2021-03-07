import React, { useState, createRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import OTPTextView from 'react-native-otp-textinput';

const Verify = () => {

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

    }
    return (
        <View style={styles.container}>
            <Text style={styles.text} >Enter OTP</Text>
            <View style={styles.containerinput}>
                <OTPTextView
                    style={styles.textInput}
                    keyboardType="number-pad"
                    inputCount={6}
                    handleTextChange={(inputOtp) => setInputOtp(inputOtp)}
                    ref={inputOtpRef}
                    tintColor="black"

                />
                <View style={styles.padbutton}>
                    <TouchableOpacity style={styles.inputButton}>
                        <Text
                            style={styles.button}
                            onPress={handleInputOtp}>VERIFY</Text>
                    </TouchableOpacity>
                    <View style={styles.register}>
                        <Text style={styles.registertext}>Don't Receive ? </Text>
                        <TouchableOpacity>
                            <Text style={styles.registertext}>Resend Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingTop: 480,
        paddingLeft: 20,
        paddingRight: 20
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    containerinput: {
        backgroundColor: '#FDC913',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },

    inputButton: {
        paddingTop: 10,
        backgroundColor: 'black',
        paddingBottom: 10,
        borderRadius: 100,
        width: 150,
        alignSelf: "center"

    },

    button: {
        fontFamily: 'OpenSansBold',
        color: '#FDC913',
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
        fontSize: 25
    },
    register: {
        flexDirection: 'row',
        justifyContent:"space-between",
        paddingTop: 20
    },
    registertext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15
    },
    textInput: {
        paddingTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: "white"
    }

})

export default Verify;