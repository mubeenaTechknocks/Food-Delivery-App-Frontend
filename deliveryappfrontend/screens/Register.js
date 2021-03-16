import React, { useState, createRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet, StatusBar } from 'react-native'
import { RadioButton, useTheme } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker';

const Register = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [city, setCity] = useState('');
    const [job, setJob] = useState('Full Time');
    const [vechicle, setVechicle] = useState('Bike');
    const [checked, setChecked] = useState('All');

    const [errortext, setErrortext] = useState('');

    const nameInputRef = createRef();
    const emailInputRef = createRef();
    const phoneInputRef = createRef();
    const cityInputRef = createRef();

    var items

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userName) {
            alert('Please Enter the Name');
            return;
        }
        if (!userEmail) {
            alert('Please enter the email');
            return;
        }
        if (!userPhone) {
            alert('Please enter the Phone Number');
            return;
        }

        var dataToSend = {
            dname: userName,
            dphone: userPhone,
            demail: userEmail,
            dcity: city

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
        navigation.navigate("RegisterMessage")
    }



    return (
        <View style={styles.container}>
            
            <View style={styles.registercontainer}>
                <Text style={styles.text}>REGISTRATION</Text>
            </View>
            <View style={styles.inputcontainer}>

                <View style={styles.padcontainer}>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Name</Text>
                        <TextInput
                            keyboardType="default"
                            onChangeText={(userName) => setUserName(userName)}
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            ref={nameInputRef}
                            onSubmitEditing={() =>
                                emailInputRef.current &&
                                emailInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Email</Text>
                        <TextInput
                            keyboardType="email-address"
                            onChangeText={(userEmail) => setUserEmail(userEmail)}
                            autoCapitalize="none"
                            returnKeyType="next"
                            ref={emailInputRef}
                            onSubmitEditing={() =>
                                phoneInputRef.current &&
                                phoneInputRef.current.focus()
                            }
                            blurOnSubmit={false} />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Phone</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            onChangeText={(userPhone) => setUserPhone(userPhone)}
                            maxLength={10}
                            returnKeyType="next"
                            ref={phoneInputRef}
                            onSubmitEditing={() =>
                                cityInputRef.current &&
                                cityInputRef.current.focus()
                            }
                            blurOnSubmit={false} />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>City</Text>
                        <TextInput
                            keyboardType="default"
                            onChangeText={(city) => setCity(city)}
                            maxLength={10}
                            returnKeyType="next"
                            ref={cityInputRef}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false} />
                        <View style={styles.line}></View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Job Type</Text>
                        <View style={styles.textinputdelivery}>
                            <RadioButton
                                value="first"
                                status={job === 'Full Time' ? 'checked' : 'unchecked'}
                                onPress={() => setJob('Full Time')}
                                color="#696969"

                            />
                            <Text style={styles.textstyledelivery}>Full Time</Text>

                            <RadioButton
                                value="second"
                                status={job === 'Part Time' ? 'checked' : 'unchecked'}
                                onPress={() => setJob('Part Time')}
                                color="#696969"
                            />

                            <Text style={styles.textstyledelivery}>Part Time</Text>
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Vechicle Type</Text>
                        <View style={styles.textinputdelivery}>
                            <RadioButton
                                value="first"
                                status={vechicle === 'Bike' ? 'checked' : 'unchecked'}
                                onPress={() => setVechicle('Bike')}
                                color="#696969"

                            />
                            <Text style={styles.textstyledelivery1}>Bike</Text>

                            <RadioButton
                                value="second"
                                status={vechicle === 'Bicycle' ? 'checked' : 'unchecked'}
                                onPress={() => setVechicle('Bicycle')}
                                color="#696969"
                            />

                            <Text style={styles.textstyledelivery}>Bicycle</Text>
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <Text style={styles.textstyle}>Delivery Access</Text>
                        <View style={styles.textinputdelivery}>
                            <RadioButton
                                value="first"
                                status={checked === 'All' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('All')}
                                color="#696969"

                            />
                            <Text style={styles.textstyledelivery2}>All</Text>

                            <RadioButton
                                value="second"
                                status={checked === 'Choose Restaurant' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('Choose Restaurant')}
                                color="#696969"
                            />

                            <Text style={styles.textstyledelivery}>Choose Restaurant</Text>
                        </View>
                    </View>
                    <View style={styles.padbutton}>
                        <TouchableOpacity style={styles.inputButton}>
                            <Text
                                style={styles.button}
                                onPress={handleSubmitPress}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Register


const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,

    },
    inputcontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5
    },
    padcontainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10


    },
    text: {
        fontFamily: 'OpenSansBold',
        alignSelf: 'center',
        fontSize: 20,
        color: 'black'
    },

    textinput: {
        paddingBottom: 20
    },

    textstyle: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingBottom: 10,
        color: '#696969'
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
        color: '#696969'

    },
    textstyledelivery1: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingTop: 6,
        paddingRight: 35,
        color: '#696969'

    },
    textstyledelivery2: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 16,
        paddingTop: 6,
        paddingRight: 50,
        color: '#696969'
    },
    inputButton: {
        paddingTop: 10,
        backgroundColor: '#FDC913',
        paddingBottom: 10,
        borderRadius: 100,
        width: 140,
        alignSelf: "center",

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
        paddingBottom: 10,
        // paddingTop: 5,
        // marginLeft:10

    }

})