import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper'

const Document = ({ navigation }) => {
  const { colors } = useTheme()
  const theme = useTheme()
  var items
  const [item, setItem] = useState('Adhaar card');
  return (
    <View style={{ paddingTop: 10, height: '100%' }}>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 60, color: "#FDC913" }}></Icons>
        </TouchableOpacity>
        <Text style={{
           marginBottom: 40, fontFamily: "OpenSansBold",
          color: colors.text,fontSize:25
        }}>Documents</Text>
      </View>

      <Text style={{ marginLeft: 25, color: colors.text, fontFamily: "OpenSansRegular",fontSize:18 }}>Driving Licence Number</Text>
      <TextInput style={[styles.input,{backgroundColor:colors.notification}]} keyboardType="number-pad"></TextInput>

      <Text style={{
        marginLeft: 25, marginTop: 20, color: colors.text, fontFamily: "OpenSansRegular",
        marginBottom: 10,fontSize:18
      }}>Govt.Photo ID Proof</Text>

      <DropDownPicker
        items={[
          { label: 'Adhaar card', value: 'Adhaar card' },
          { label: 'Pan card', value: 'Pan card' },


        ]}
        defaultValue={items}
        containerStyle={{ height: 40,  marginLeft:25,marginRight:25 , marginBottom:20}}
        placeholder="Select Id Proof"

        globalTextStyle={{ color: "#696969", fontFamily: "OpenSansRegular" }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: "white" }}
        onChangeItem={(item) => setItem(item.value)}

      />
<View>
      <Text style={{
        marginLeft: 25, marginTop: 20,
        fontFamily: "OpenSansRegular", color: colors.text,fontSize:18
      }}>ID Number</Text>
      <TextInput style={[styles.input, { backgroundColor: colors.notification }]} keyboardType="number-pad"></TextInput>
      </View>
      <TouchableOpacity style={{ paddingTop: 5 }} onPress={() => navigation.navigate("IdPermits")}>
        <Text style={{
          backgroundColor: colors.primary, fontSize: 18, fontFamily: "OpenSansSemiBold",
          color: "white", borderRadius: 10, marginTop: 40,
          padding:10,textAlign:'center',marginLeft:125,marginRight:125
        }}>Save</Text>
      </TouchableOpacity>

    </View>
  )

}

export default Document;

const styles = StyleSheet.create({
  input: {
    
    marginTop: 15,
    marginLeft: 25,
 elevation:2,
    borderRadius: 2,
    backgroundColor: "white",
    color: "#696969",
    padding: 5,
    fontFamily: "OpenSansRegular",
    marginRight:25
  },

})