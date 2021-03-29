import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Alert,Image } from 'react-native'
import { useTheme, Avatar, Drawer } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/Ionicons'

import * as ImagePicker from 'expo-image-picker';

const Profile = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={() => navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={[styles.text,{color:colors.text}]}>Profile</Text>
            </View>
            <View style={[styles.inputcontainer,{backgroundColor:colors.card}]}>
            <Avatar.Image
                    source={{
                        uri:
                            'https://images-na.ssl-images-amazon.com/images/I/91BDAgAQiXL.png',
                    }}
                    size={100}
                    style={styles.image}
                /> 
                {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                <View>

                    <TouchableOpacity onPress={pickImage}>
                        <Icon1 name="camera" size={30} style={{ paddingTop: 20, paddingLeft: 145,color:colors.text }}></Icon1>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.name,{color:colors.text}]}>Name</Text>
                <View style={styles.row}>
                    <Text style={[styles.id,{color:colors.text}]}>ID</Text>
                    <Text style={[styles.rate,{color:colors.text}]}>Rating : 5</Text>
                </View>
                <View style={styles.pad}></View>
                <View style={styles.list}>
                    <TouchableOpacity style={[styles.touch,{backgroundColor:colors.notification}]} onPress={() => navigation.navigate("PersonalDetails")}>
                        <Text style={[styles.touchtext,{color:colors.text}]}>Personal Details</Text>
                    </TouchableOpacity>
                    <View style={styles.pad}></View>
                    <TouchableOpacity style={[styles.touch,{backgroundColor:colors.notification}]} onPress={() => navigation.navigate("SavingsAccount")}>
                        <Text style={[styles.touchtext,{color:colors.text}]}>Savings Account</Text>
                    </TouchableOpacity>
                    <View style={styles.pad}></View>
                    <TouchableOpacity style={[styles.touch,{backgroundColor:colors.notification}]} onPress={() => navigation.navigate("IdPermits")}>
                        <Text style={[styles.touchtext,{color:colors.text}]}>ID & Permit Documents</Text>
                    </TouchableOpacity>
                    <View style={styles.pad}></View>
                    <TouchableOpacity style={[styles.touch,{backgroundColor:colors.notification}]}
                        onPress={() => Alert.alert(
                            "",
                            "Are you sure want to Logout ?",
                            [
                                { text: "LOGOUT", onPress: () => { navigation.navigate("Login") } },
                                { text: "CANCEL", onPress: () => { navigation.navigate("Profile") } }
                            ],
                            { cancelable: false }
                        )}>
                        <Text style={[styles.touchtext,{color:colors.text}]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputcontainer: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        backgroundColor: '#f5fffa',
        elevation: 20,
        borderRadius: 20,
        paddingBottom: 50

    },
    text: {
        alignSelf: 'center',
        fontFamily: 'OpenSansBold',
        fontSize: 30,

        color: '#696969'
    },
    image: {
        alignSelf: 'center'
    },
    name: {
        fontFamily: 'OpenSansBold',
        fontSize: 23,
        alignSelf: 'center',
        paddingTop: 10,
        color: '#696969'
    },
    id: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 17,
        paddingLeft: 150,
        paddingRight: 70,
        color: '#696969'
    },
    rate: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 17,
        color: '#696969'
    },
    row: {
        flexDirection: 'row',
        paddingTop: 10
    },
    // list: {
    //     paddingLeft: 20,
    //     paddingRight: 20
    // },
    touch: {
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10
    },
    pad: {
        paddingTop: 30
    },
    touchtext: {
        fontFamily: 'OpenSansSemiBold',
        fontSize: 18,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#696969'
    },
    textcontainer: {
        paddingBottom: 50,
        flexDirection: 'row'
    },
    menu: {
        paddingRight: 100,
        paddingTop: 5
    }

})