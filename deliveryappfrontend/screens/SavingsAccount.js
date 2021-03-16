import React, { useState, createRef } from 'react'
import { View, Text, TextInput, StyleSheet, Keyboard, TouchableOpacity, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'

const SavingsAccount = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [ifsc, setIfsc] = useState('');

    const [errortext, setErrortext] = useState('');

    const accountnumberInputRef = createRef();
    const accountnameInputRef = createRef();
    const ifscInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!accountNumber) {
            alert('Please Enter the Account Number');
            return;
        }
        if (!accountName) {
            alert('Please Enter the Name');
            return;
        }
        if (!ifsc) {
            alert('Please Enter the IFSC Code');
            return;
        }


        var dataToSend = {
            accnum: accountNumber,
            accname: accountName,
            ifsc: ifsc

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
        navigation.navigate("Profile")
    }

    return (
        <View style={styles.container}>
           
            <View style={styles.inputcontainer}>
                <View style={styles.registercontainer}>
                    <Text style={styles.text}>Savings Account</Text>
                </View>
                <View style={styles.padcontainer}>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Account Number</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            onChangeText={(accountNumber) => setAccountNumber(accountNumber)}
                           
                            returnKeyType="next"
                            ref={accountnumberInputRef}
                            onSubmitEditing={() =>
                                accountnameInputRef.current &&
                                accountnameInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Account Holder Name</Text>
                        <TextInput
                            keyboardType="default"
                            onChangeText={(accountName) => setAccountName(accountName)}
                            maxLength={10}
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            ref={accountnameInputRef}
                            onSubmitEditing={() =>
                                accountnameInputRef.current &&
                                accountnameInputRef.current.focus()
                            }
                            
                            blurOnSubmit={false} />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>IFSC Code</Text>
                        <TextInput
                            keyboardType="default"
                            onChangeText={(ifsc) => setIfsc(ifsc)}
                            maxLength={10}
                            returnKeyType="next"
                            ref={ifscInputRef}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false} />
                        <View style={styles.line}></View>
                    </View>
                </View>
                <View style={styles.padbutton}>
                    <TouchableOpacity style={styles.inputButton}>
                        <Text
                            style={styles.button}
                            onPress={handleSubmitPress}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default SavingsAccount

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
        fontSize: 25,
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
   
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        // width: 140,
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