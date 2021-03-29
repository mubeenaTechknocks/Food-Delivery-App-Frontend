import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'react-native-paper'

const WeekPayouts = ({ navigation }) => {
  const { colors } = useTheme()
  const theme = useTheme()

  const [problem, setProblem] = useState([
    { name: 'Received Less Payout', key: '1' },
    { name: 'Did not Receive Payout', key: '2' },
  ]);

  return (
    <View style={{ paddingTop: 10, paddingBottom: 300 }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 30, color: "#FDC913" }}></Icons>
        </TouchableOpacity>
        <Text style={{
          fontSize: 22, marginBottom: 40, color: colors.text,
          fontFamily: "OpenSansBold", marginTop: 5,
        }}>Weekly Payout Problems</Text>
      </View>

      <FlatList
        data={problem}
        renderItem={({ item }) => (
          <View style={[styles.view5, { backgroundColor: colors.card }]}>
            <Text style={{
              fontSize: 18, color: colors.text,
              fontFamily: "OpenSansSemiBold",textAlign:'center'
            }} onPress={() => navigation.navigate("ReportProblem",{items:item})}>{item.name}</Text>
          </View>
        )}


      />
    </View>
  )
}

export default WeekPayouts;

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