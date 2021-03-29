import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme } from 'react-native-paper'

const Settings= ({navigation})=>{
    const { colors } = useTheme()
    const theme = useTheme()
    return(
        <View style={{paddingTop:10}}>
                 <View style={{flexDirection:'row'}}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:100,color:"#FDC913"}}></Icons>
            </TouchableOpacity>
            <Text style={[styles.Settings,{color:colors.text}]}>Settings</Text>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text  
            style={[styles.contact,{color:colors.text}]}>Contact</Text>
          </TouchableOpacity>
            </View>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
            <Text  
            style={[styles.mode,{color:colors.text}]}>Mode</Text>
          </TouchableOpacity>
            </View>
        </View>
    )
}

export default Settings;

const styles= StyleSheet.create({
    view5: {
        marginBottom: 30,
        marginLeft: 30,
       
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
       
        padding:10,
        marginTop:20,
        marginRight:30,
        

    },
    Settings:{
        fontSize:24,
        color:"#696969",
        fontFamily:"OpenSansBold",
        marginBottom:40
},
contact:{
    color:"#696969",
    fontSize:17,
    fontFamily:"OpenSansSemiBold",
    textAlign:'center'
},
mode:{
    fontSize:17,
    color:"#696969",
    fontFamily:"OpenSansSemiBold",
    textAlign:'center'
}
    
})