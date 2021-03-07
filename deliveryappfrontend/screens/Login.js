import React, { useState, createRef } from 'react';
import { TextInput, Text, Image, Button, View, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
// import { values } from './global'
import Icon from 'react-native-vector-icons/Feather'


const Login = ({ navigation }) => {
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
            <View style={styles.container}>
                <View >
                    <Text style={styles.texthead}>Login</Text>
                </View>

                <Text style={styles.text}>Enter ID</Text>
                <View style={styles.input}>
                    {/* <Icon style={styles.icon} name="phone" size={20} color="#FDC913" /> */}

                    <TextInput
                        style={styles.place}
                        keyboardType="phone-pad"
                        placeholder="ID"
                        onChangeText={
                            (userId) => setUserId(userId)
                        }
                        ref={idInputRef}
                        returnKeyType="next"
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false}
                    />
                </View>
                {errortext != '' ? (
                    <Text style={styles.errorTextStyle}>
                        {errortext}
                    </Text>
                ) : null}
                <View style={styles.padbutton}>
                    <TouchableOpacity style={styles.inputButton}>
                        <Text
                            style={styles.button}
                            onPress={handleSubmitPress}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.register}>
                <Text style={styles.registertext}>Don't have an Account ? </Text>
                <TouchableOpacity>
                    <Text style={styles.registertext} onPress={()=> navigation.navigate("Register")}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: '#FDC913',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },

    input: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 10,
        flexDirection: 'row'
    },
    place: {
        paddingLeft: 20,
        width: 250,
        fontFamily: 'OpenSansRegular',

    },
    inputText: {
        paddingTop: 30,
        flexDirection: 'row',
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
    pad: {
        paddingTop: 20
    },
    texthead: {
        fontFamily: 'OpenSansBold',
        paddingBottom: 50,
        paddingTop: 50,
        alignSelf: 'center',
        fontSize: 30,
        color: 'black'

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
        fontFamily: 'OpenSansSemiBold'
    },
    register: {
        flexDirection: 'row',
        paddingTop: 20
    },
    registertext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 15
    }

});

export default Login;