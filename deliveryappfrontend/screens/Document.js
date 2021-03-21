import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Document = ({navigation}) =>{
    var items
    const [item, setItem] = useState('Adhaar card');
    return(
        <View style={{paddingTop:10,paddingBottom:300}}>
          
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icons name="arrow-back" size={30} style={{marginLeft:20,marginRight:60,color:"#FDC913"}}></Icons>
            </TouchableOpacity>
            <Text style={{fontSize:25,marginBottom:40,fontFamily:"OpenSansBold",
              color:"#696969"}}>Documents</Text>
            </View>

            <Text style={{marginLeft:45,color:"#696969",fontFamily:"OpenSansRegular",}}>Driving Licence Number</Text>
            <TextInput style={styles.input} keyboardType="number-pad"></TextInput>

            <Text style={{marginLeft:45,marginTop:20,color:"#696969",fontFamily:"OpenSansRegular",
              marginBottom:10}}>Govt.Photo ID Proof</Text>

            <DropDownPicker
            items={[
              { label: 'Adhaar card', value: 'Adhaar card' },
              { label: 'Pan card', value: 'Pan card' },


            ]}
            defaultValue={items}
            containerStyle={{ height: 40, width: "75%", marginLeft: 42 }}
            placeholder="Select Id Proof"
          
            globalTextStyle={{color:"#696969",fontFamily:"OpenSansRegular"}}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => setItem(item.value)}

          />

            <Text style={{marginLeft:45,marginTop:20,
              fontFamily:"OpenSansRegular",color:"#696969"}}>ID Number</Text>
            <TextInput style={styles.input} keyboardType="number-pad"></TextInput>

            <TouchableOpacity style={{ paddingTop: 5 }} onPress={() =>navigation.navigate("IdPermits")}>
                            <Text style={{
                                backgroundColor: "#FDC913",fontSize:15,fontFamily:"OpenSansSemiBold",
                                color: "white", height: 38, paddingTop: 8, 
                                paddingLeft: 36, paddingRight: 20, paddingBottom: 10,
                                 borderRadius: 20, width: "30%", marginLeft:125,marginTop:20
                            }}>Save</Text>
                        </TouchableOpacity>
           
        </View>
    )
        
}

export default Document;

const styles= StyleSheet.create({
    input:{
        borderColor:"#696969",
        borderWidth:1,
       marginTop:15,
       marginLeft:45,
       width:"75%",
       borderRadius:2,
       backgroundColor:"white",
       color:"#696969",
       paddingLeft:20,
       fontFamily:"OpenSansRegular"
    
       
   
    },

})