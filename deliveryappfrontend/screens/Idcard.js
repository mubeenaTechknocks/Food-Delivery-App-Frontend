import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme, Avatar, Drawer } from 'react-native-paper';

const Idcard = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [Id, setId] = useState();
  const [Mobile, setMobile] = useState();
  const [BloodGroup, setBloodGroup] = useState();
  const [Location, setLocation] = useState();
  const [IdProof, setIdProof] = useState();
  const [Licence, setLicence] = useState();
  const [Emergency, setEmergency] = useState();
 
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ paddingTop: 10, height: '100%' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 110, color: "#FDC913" }}></Icons>
          </TouchableOpacity>
          <Text style={{ fontSize: 24, marginBottom: 20, color: "#696969", fontFamily: "OpenSansBold" }}>ID Card</Text>
        </View>
        <View style={styles.view3}>
         <Avatar.Image
              source={{
                uri:
                  'https://images-na.ssl-images-amazon.com/images/I/91BDAgAQiXL.png',
              }}
              size={80}
              style={{alignSelf:'center',marginTop:10}}
            />

         

          <Text style={{
            marginLeft: 150, fontFamily: "OpenSansSemiBold", marginTop: 20, fontSize: 15,
            color: "#696969"
          }} >Name</Text>


          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }}>ID</Text>
            <Text style={{ marginLeft: 145 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} value={Id} keyboardType="number-pad"
              onChangeText={(text) => setId(text)} ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }}>Mobile Number</Text>
            <Text style={{ marginLeft: 55 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} value={Mobile} keyboardType="number-pad"
              onChangeText={(text) => setMobile(text)}  ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }}>Blood group</Text>
            <Text style={{ marginLeft: 77 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} value={BloodGroup} onChangeText={(text) => setBloodGroup(text)} ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }}>Location</Text>
            <Text style={{ marginLeft: 101 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} value={Location} onChangeText={(text) => setLocation(text)} ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }}>Govt Id Proof</Text>
            <Text style={{ marginLeft: 70 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} value={IdProof} onChangeText={(text) => setIdProof(text)} ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }}>Driving Licence</Text>
            <Text style={{ marginLeft: 56 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} keyboardType="number-pad"
              value={Licence} onChangeText={(text) => setLicence(text)} ></TextInput>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 15 }}>
            <Text style={{
              fontFamily: "OpenSansRegular",
              color: "#696969"
            }} >Emergency Number</Text>
            <Text style={{ marginLeft: 24 }}>:</Text>
            <TextInput style={{
              fontFamily: "OpenSansRegular", marginLeft: 10,
              color: "#696969"
            }} keyboardType="number-pad"
              value={Emergency} onChangeText={(text) => setEmergency(text)} ></TextInput>
          </View>


          <View style={styles.view5}>
            <Text style={{
             fontSize: 15, fontFamily: "OpenSansSemiBold",
              color: "#696969"
            }}>Valid Only For Distribution of Food </Text>
           
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Idcard;

const styles = StyleSheet.create({
  view3: {
    marginBottom: 20,
    marginLeft: 25,
    // height: 520,
    width: "86%",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    //shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 20
  },
  view5: {
    marginBottom: 20,
    borderRadius: 10,
    borderWidth:1,
    // elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginTop: 20,
    padding:20,
    // alignSelf:'center'
    

  },
})