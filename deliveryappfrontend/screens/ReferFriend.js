import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ReferFriend = ({navigation}) =>{
    var items
    const [item, setItem] = useState('Ernakulam');
    return(
        <View style={{paddingTop:10,paddingBottom:300}}>
          
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:50,color:"#FDC913"}}></Icons>
            </TouchableOpacity>
            <Text style={{fontSize:30,marginBottom:30,color:"#696969",fontFamily:"OpenSansBold",}}>Refer a Friend</Text>
            </View>

            <Text style={{marginLeft:35,marginBottom:20,fontSize:20,color:"#696969",
            fontFamily:"OpenSansSemiBold"}}>Enter Friend's Details</Text>

            <View style={styles.view5}>
            <Text style={{marginLeft:35,color:"#696969",fontFamily:"OpenSansRegular",}}>Full Name</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={{marginLeft:35,marginTop:20,color:"#696969",fontFamily:"OpenSansRegular",}}>Mobile Number</Text>
            <TextInput style={styles.input} keyboardType="number-pad"></TextInput>
            <Text style={{marginLeft:35,marginTop:20,marginBottom:10,color:"#696969",fontFamily:"OpenSansRegular",}}>City</Text>
            <TextInput style={styles.input} keyboardType="number-pad"></TextInput>
            <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>navigation.navigate("ReferFriend2")}>
                            <Text style={{
                                backgroundColor: "#FDC913",fontSize:15,
                                color: "white", height: 38, paddingTop: 8, fontFamily:"OpenSansSemiBold",
                                paddingLeft: 35, paddingRight: 20, paddingBottom: 10,
                                 borderRadius: 20, width: "50%", marginLeft:90,marginTop:20
                            }}>Refer Friend</Text>
                        </TouchableOpacity>
                        </View>
           
        </View>
    )
        
}

export default ReferFriend;

const styles= StyleSheet.create({
    input:{
        borderColor:"#696969",
       // borderWidth:1,
       marginTop:2,
       marginLeft:45,
       width:"80%",
       borderRadius:2,
       //backgroundColor:"white",
       borderBottomWidth:1 ,
       color:"#696969",
       fontFamily:"OpenSansRegular",  
   
    },
    view5: {
      marginBottom: 50,
      marginLeft: 17,
      height: 340,
      width: "90%",
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      // paddingLeft: 120,
      paddingTop:20,
      marginTop:20,
      marginRight:30,
      paddingRight:20
      //flexDirection:'row'

  },
  

})