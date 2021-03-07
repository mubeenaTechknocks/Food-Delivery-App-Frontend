import React, { useState, createRef } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper'
import DropDownPicker from 'react-native-dropdown-picker';

const Register = ({navigation}) => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [city, setCity] = useState('');
    const [job, setJob] = useState('');
    const [vechicle, setVechicle] = useState('');
    const [checked, setChecked] = useState('first');

    const [errortext, setErrortext] = useState('');

    const nameInputRef = createRef();
    const emailInputRef = createRef();
    const phoneInputRef = createRef();

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
            demail: userEmail


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
            <View style={styles.inputcontainer}>
                <Text style={styles.text}>Register</Text>
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
                        onSubmitEditing={Keyboard.dismiss}
                        blurOnSubmit={false} />
                    <View style={styles.line}></View>
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.textstyle}>City</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Mundakayam', value: 'Mundakayam' },
                            { label: 'Kottayam', value: 'Kottayam' },
                            { label: 'Kanjirappaly', value: 'Kanjirappaly' },
                            { label: 'Ponkunnam', value: 'Ponkunnam' },
                        ]}
                        defaultValue={items}
                        containerStyle={{ height: 40 }}
                        style={styles.drop}
                        globalTextStyle={{ fontFamily: 'OpenSansRegular' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(city) => setCity(city.value)}

                    />
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.textstyle}>Job Type</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Full Time', value: 'Full Time' },
                            { label: 'Part Time', value: 'Part Time' },
                            
                        ]}
                        defaultValue={items}
                        containerStyle={{ height: 40 }}
                        style={styles.drop}
                        globalTextStyle={{ fontFamily: 'OpenSansRegular' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(job) => setJob(job.value)}

                    />
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.textstyle}>Type of Vechicle</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Bike', value: 'Bike' },
                            { label: 'Bicycle', value: 'Bicycle' },
                            
                        ]}
                        defaultValue={items}
                        containerStyle={{ height: 40 }}
                        style={styles.drop}
                        globalTextStyle={{ fontFamily: 'OpenSansRegular' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(vechicle) => setVechicle(vechicle.value)}

                    />
                </View>
                <View style={styles.textinput}>
                    <Text style={styles.textstyle}>Delivery Access</Text>
                    <View style={styles.textinputdelivery}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color="#696969"

                    />
                    <Text style={styles.textstyledelivery}>All</Text>

                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
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
    )
}

export default Register


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 60

    },
    inputcontainer: {
        backgroundColor: '#FDC913',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20
    },
    text: {
        paddingBottom: 30,
        fontFamily: 'OpenSansBold',
        alignSelf: 'center',
        fontSize: 25
    },

    textinput: {
        paddingBottom: 10
    },

    textstyle: {
        fontFamily:'OpenSansSemiBold',
        fontSize:16,
        paddingBottom:10,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
    textinputdelivery: {
        flexDirection:'row',
    },
    textstyledelivery: {
        fontFamily:'OpenSansSemiBold',
        fontSize:16,
        paddingTop:6,
        
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
        paddingTop: 10,
        paddingBottom: 20
    },
    
})