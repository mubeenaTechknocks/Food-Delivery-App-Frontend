import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper'

const OrderProblem = ({navigation}) => {
    const { colors } = useTheme()
    const theme = useTheme()
    const [problem,setProblem]= useState([
        {name:'Pickup Mile/ Deliver Mile',key:'1'},
        {name:'Restaurant Waiting Time',key:'2'},
        {name:'Address Not Found', key:'3'}

      ]);
    return (
        <View style={{ paddingTop: 10,}}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 10, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, marginBottom: 40, color:colors.text, fontFamily: "OpenSansBold", }}>Order Related Problems</Text>
            </View>
          
            <FlatList
          data={problem}
          renderItem={({ item }) =>(
            <View style={[styles.view5,{backgroundColor:colors.card}]}>
            <Text style={{textAlign:"center",fontSize:18, color:colors.text,
            fontFamily: "OpenSansSemiBold", }} onPress={() => navigation.navigate("ReportProblem",{items:item})}>{item.name}</Text>
            </View>
          )}
        />
        </View>
    )
}

export default OrderProblem;

const styles = StyleSheet.create({
    view5: {
      marginBottom: 50,
      marginLeft: 30,
      backgroundColor: "white",
      borderRadius: 10,
      elevation: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      // paddingLeft: 120,
      padding: 10,
      marginTop: 20,
      marginRight: 30,

    },

})