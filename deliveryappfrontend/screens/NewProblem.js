import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper'

const NewProblem = ({ navigation }) => {
    const { colors } = useTheme()
    const theme = useTheme()

    return (
        <View style={{ paddingTop: 10, height:'100%'}}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icons name="arrow-back" size={30} style={{ marginLeft: 20, marginRight: 20, color: "#FDC913" }}></Icons>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, marginBottom: 40, color:colors.text, fontFamily: "OpenSansBold", }}>Report New Problem</Text>
            </View>

            <Text style={{color:colors.text,fontFamily:"OpenSansRegular",marginLeft:35,fontSize:18}}>Please Select</Text>

            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text  onPress={() => navigation.navigate("OrderProblem")}
                    style={{ color:colors.text, fontFamily: "OpenSansSemiBold", fontSize: 18,textAlign:'center'  }}>Order Related Problem</Text>

            </View>
            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text onPress={() => navigation.navigate("WeekPayouts")}
                    style={{  color:colors.text, fontFamily: "OpenSansSemiBold",fontSize: 18,textAlign:'center' }}>Weekly Payout Related Problem</Text>

            </View>
            <View style={[styles.view5,{backgroundColor:colors.card}]}>
                <Text onPress={() => navigation.navigate("Problems")}
                    style={{ color:colors.text, fontFamily: "OpenSansSemiBold",fontSize: 18,textAlign:'center'  }}>General Problem</Text>

            </View>
        </View>
    )
}

export default NewProblem;

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