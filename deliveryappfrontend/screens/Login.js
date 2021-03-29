import React, { useState, createRef } from 'react';
import { TextInput, Text, Image, Button, View, StyleSheet, Keyboard, TouchableOpacity, StatusBar } from 'react-native';
// import { values } from './global'
import Icon from 'react-native-vector-icons/Feather'
import { RadioButton, useTheme } from 'react-native-paper'


const Login = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    const [userId, setUserId] = useState('');
    // const [userPassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');

    const idInputRef = createRef();
    // const passInputRef = createRef();


    const handleSubmitPress = () => {
        setErrortext('');
        if (!userId) {
            alert('Please Enter the ID');
            return;
        }
        // if (!userPassword) {
        //     alert('Please fill password');
        //     return;
        // }
        var dataToSend = {
            did: userId,
            // pass: userPassword,

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
        navigation.navigate("Verify")
    }

    return (
        <View style={styles.inputContainer}>
            <StatusBar backgroundColor={colors.background} barStyle={theme.dark ? "light-content" : "dark-content"} />

            <View style={[styles.container,{backgroundColor:colors.card}]}>
                <View >
                    <Text style={[styles.texthead,{color:colors.text}]}>Login</Text>
                </View>
                <View style={styles.input}>
                    <Text style={[styles.text,{color:colors.text}]}>Enter ID</Text>
                    {/* <Icon style={styles.icon} name="phone" size={20} color="#FDC913" /> */}
                    <TextInput
                        style={[styles.place,{color:colors.text}]}
                        keyboardType="phone-pad"
                        // placeholder="ID"
                        onChangeText={
                            (userId) => setUserId(userId)
                        }
                        ref={idInputRef}
                        returnKeyType="next"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                    <View style={styles.line}></View>
                </View>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>
                        {errortext}
                    </Text>
                ) : null}
                <View style={styles.padbutton}>
                    <TouchableOpacity style={[styles.inputButton,{backgroundColor:colors.primary}]}>
                        <Text
                            style={styles.button}
                            onPress={handleSubmitPress}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.register}>
                <Text style={[styles.registertext,{color:colors.text}]}>Don't have an Account ? </Text>
                <TouchableOpacity>
                    <Text style={styles.registertext1} onPress={() => navigation.navigate("Register")}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        // backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 20
    },

    input: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:25,
        paddingRight:25,
        borderRadius: 10,
       
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#696969'
    },
    place: {
        // paddingLeft: 20,
        width: 250,
        // fontFamily: 'OpenSansRegular',

    },
    inputText: {
        paddingTop: 30,
        flexDirection: 'row',
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
    pad: {
        paddingTop: 20
    },
    texthead: {
        fontFamily: 'OpenSansBold',
        paddingBottom: 50,
        paddingTop: 50,
        alignSelf: 'center',
        fontSize: 30,
        color: '#696969'

    },
    icon: {
        paddingLeft: 15
    },
    padbutton: {
        paddingTop: 50,
        paddingBottom: 50
    },
    text: {
        paddingBottom: 10,
        fontFamily: 'OpenSansSemiBold',
        color: '#696969',
    },
    register: {
        flexDirection: 'row',
        paddingTop: 20
    },
    registertext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        color: '#696969'
    },
    registertext1: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15,
        color: '#FDC913'
    }

});

export default Login;