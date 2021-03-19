import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
//import Icons from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';



const Contact = ({navigation}) =>{
  
    return(
        <View style={{paddingTop:10,paddingBottom:300}}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Settings")}>
             <Icons name="arrow-back"  color="#FDC913" size={35} style={{marginLeft:15,marginRight:80}}></Icons>
             </TouchableOpacity>
            <Text style={styles.contact}>Contact</Text>
            {/* <Text style={styles.back}>Back</Text> */}
             </View>

             <View style={styles.view4}>
             <Text style={styles.contact1}>Contact Us</Text>

             <View style={{flexDirection:'row'}}>
             <Text style={styles.text1}>Email</Text>
             <Text style={styles.text1}>:</Text>
             <Text style={styles.text1}>foodappadmin@gmail.com</Text>
             </View>

             <View style={{flexDirection:'row'}}>
                 <Text style={styles.text1}>Phone</Text>
                 <Text style={{ marginLeft:9,
                                marginBottom:5,
                              }}>:</Text>
                 <Text style={styles.text1}>+91 9876543210</Text>
             </View>
             </View>
        </View>
    )

}


export default Contact;

const styles = StyleSheet.create({
    contact:{
        marginLeft:20,
        fontSize:24,
        fontFamily:"OpenSansBold",
        color:"#696969",
        paddingBottom:100
    },
    back:{
        fontSize:15,
        marginTop:50,
        marginLeft:90,
       

    },

    view4:{
        marginBottom:290,
        marginLeft:27,
        height: 250,
        width: "85%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        paddingLeft:20,
        // paddingTop:15,
        marginTop:45
    },
    contact1:{
        marginLeft:0,
        marginTop:30,
        fontFamily:"OpenSansSemiBold",
        fontSize:24,
        marginBottom:20,
        color:"#696969"
    },
    text1:{
        marginLeft:15,
        marginBottom:5,
        color:"#696969",
        fontFamily:"OpenSansRegular",
       
        
    },
    text2:{
        marginLeft:15,
        marginBottom:5,
        color:"#696969",
        fontFamily:"OpenSansRegular",
      
    }
})