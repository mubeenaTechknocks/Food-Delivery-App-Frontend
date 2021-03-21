import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';

const Settings= ({navigation})=>{
    return(
        <View style={{paddingTop:10}}>
                 <View style={{flexDirection:'row'}}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:100,color:"#FDC913"}}></Icons>
            </TouchableOpacity>
            <Text style={{fontSize:24,color:"#696969",fontFamily:"OpenSansBold",marginBottom:40}}>Settings</Text>
            </View>

            <View style={styles.view5}>
                <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text  
            style={{color:"#696969",fontSize:17,fontFamily:"OpenSansSemiBold",textAlign:'center'}}>Contact</Text>
          </TouchableOpacity>
            </View>

            <View style={styles.view5}>
                <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
            <Text  
            style={{fontSize:17,color:"#696969",fontFamily:"OpenSansSemiBold",textAlign:'center'}}>Mode</Text>
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
    
})