import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, TextInput, ImageBackground, Image } from 'react-native';

import { RadioButton, useTheme } from 'react-native-paper';
import { AuthContext } from '../Components/Context'
// import { useTheme} from '@react-navigation/native';

const Mode = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const [checked, setChecked] = useState('first');

    const paperTheme = useTheme();

    const { toggleTheme } = React.useContext(AuthContext);

    return (

        <View style={{ paddingBottom: 500 }}>
            <View style={styles.view4}>
                <Text style={styles.font}>Choose Mode</Text>
                <View style={styles.switch}>
                    <Text style={styles.font1}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        // ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleTheme}
                        value={paperTheme.dark}
                    />
                </View>
            </View>
        </View>
    )


    // }

}


export default Mode;


const styles = StyleSheet.create({

    view4: {
        marginBottom: 30,
        marginLeft: 45,
        height: 220,
        width: "75%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        paddingLeft: 50,
        paddingTop: 15,
        marginTop: 150
    },
    font: {
        fontFamily: "OpenSansBold",
        color: "#696969",
        fontSize: 20,
        marginTop: 10,
        marginRight: 80,
        marginBottom: 10
    },
    font1: {
        fontFamily: "OpenSansSemiBold",
        color: "#696969",
        fontSize: 18,
        marginTop: 10,
        marginRight: 80,
        marginBottom: 10
    },
    switch:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})