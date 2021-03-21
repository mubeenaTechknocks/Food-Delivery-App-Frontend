import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { RadioButton, useTheme } from 'react-native-paper';
import { AuthContext } from '../Components/Context'
import Icon1 from 'react-native-vector-icons/Ionicons'

const Mode = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);

    const [checked, setChecked] = useState('first');

    const paperTheme = useTheme();

    const { toggleTheme } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <TouchableOpacity>
                    <Icon1 name="arrow-back" size={30} color="#FDC913" onPress={()=>navigation.goBack()} style={styles.menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Mode</Text>
            </View>
           <View style={styles.modecontainer}>
                <View style={styles.mode}>
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
            </View>
    )


    // }

}


export default Mode;


const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'white',
        height: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    mode: {
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 50,
        paddingTop: 30
    },
    font: {
        fontFamily: "OpenSansBold",
        color: "#696969",
        fontSize: 20,
        paddingBottom: 40
    },
    font1: {
        fontFamily: "OpenSansSemiBold",
        color: "#696969",
        fontSize: 18,
        paddingRight: 50
    },
    switch: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menu: {
        paddingRight: 110,
        paddingTop: 5
    },
    textcontainer:{
        paddingBottom:200,
        flexDirection:'row',
    },
    text: {
        alignSelf: 'center',
        fontFamily: 'OpenSansBold',
        fontSize: 25,
        color: '#696969'
    },
    modecontainer:{
        alignItems: 'center',
    }
})