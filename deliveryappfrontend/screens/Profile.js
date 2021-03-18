import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native'
import { useTheme, Avatar, Drawer } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/Ionicons'

const Profile = ({ navigation }) => {

    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            <View style={styles.textcontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={() => navigation.navigate("HomeScreen")} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Profile</Text>
            </View>
            <View style={styles.inputcontainer}>
                <Avatar.Image
                    source={{
                        uri:
                            'https://images-na.ssl-images-amazon.com/images/I/91BDAgAQiXL.png',
                    }}
                    size={100}
                    style={styles.image}
                />
                <Text style={styles.name}>Name</Text>
                <View style={styles.row}>
                    <Text style={styles.id}>ID</Text>
                    <Text style={styles.rate}>Rating : 5</Text>
                </View>
                <View style={styles.pad}></View>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("PersonalDetails")}>
                        <Text style={styles.touchtext}>Personal Details</Text>
                    </TouchableOpacity>
                    <View style={styles.pad}></View>
                    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("SavingsAccount")}>
                        <Text style={styles.touchtext}>Savings Account</Text>
                    </TouchableOpacity>
                    <View style={styles.pad}></View>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.touchtext}>ID & Permit Documents</Text>
                    </TouchableOpacity>
                    <View style={styles.pad}></View>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => Alert.alert(
                            "",
                            "Are you sure want to Logout ?",
                            [
                                { text: "LOGOUT", onPress: () => { navigation.navigate("Login") } },
                                { text: "CANCEL", onPress: () => { navigation.navigate("Profile") } }
                            ],
                            { cancelable: false }
                        )}>
                        <Text style={styles.touchtext}>Logout</Text>
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
    textcontainer:{
        paddingBottom:50,
        flexDirection:'row'
    },
    menu:{
        paddingRight:100,
        paddingTop:5
    }

})