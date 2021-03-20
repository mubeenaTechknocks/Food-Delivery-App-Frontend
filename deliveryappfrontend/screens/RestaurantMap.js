import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Map from './Map'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerActions, useTheme } from '@react-navigation/native';
import getDirections from 'react-native-google-maps-directions'

const RestaurantMap = ({navigation}) => {

    const { colors } = useTheme()
    const theme = useTheme()

    handleGetDirections = () => {
        const data = {
           source: {
            latitude: -33.8356372,
            longitude: 18.6947617
          },
          destination: {
            latitude: -33.8600024,
            longitude: 18.697459
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],
          waypoints: [
            {
              latitude: -33.8600025,
              longitude: 18.697452
            },
            {
              latitude: -33.8600026,
              longitude: 18.697453
            },
               {
              latitude: -33.8600036,
              longitude: 18.697493
            }
          ]
        }
     
        getDirections(data)
      }

    return (
        <View style={styles.container}>
                
            <View style={styles.mapcontainer}>
                <Map />
            </View>
            <View>
                <View style={styles.inputcontainer}>
                    <Icon name="restaurant" size={30} color="#696969" />
                    <Text style={styles.text} onPress={()=>navigation.navigate("Pickup")} >Restaurant Name</Text>
                    <TouchableOpacity style={styles.iconcontainer} onPress={handleGetDirections}>
                        <Icon1 name="directions" size={30} color="#696969" />
                    </TouchableOpacity>
                </View>
                <View style={styles.add}>
                    <Text style={styles.addtext} >Address</Text>
                </View>
                <View style={styles.iconcontainer1}>
                        <TouchableOpacity style={styles.icontouch}>
                            <Icon style={styles.icon} name="call" size={30} color="#696969" />
                            <Text style={styles.icontext}>call</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default RestaurantMap

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        height: '100%'
    },
    mapcontainer: {
        height: 450
    },
    inputcontainer: {
        backgroundColor: 'white',
        elevation: 20,
        paddingBottom: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    iconcontainer:{
        backgroundColor:'white',
        elevation:20,
       padding:2
    },
    add:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    },
    text:{
        fontFamily:'OpenSansBold',
        fontSize:20,
        color:'#696969'
    },
    addtext:{
        fontFamily:'OpenSansSemiBold',
        fontSize:20,
        color:'#696969'
    },
    iconcontainer1: {
        paddingTop:10,
        paddingLeft:40,
        paddingRight:20
    },
    icontouch: {
        flexDirection: 'row'
    },
    icontext: {
        fontFamily: 'OpenSansRegular',
        fontSize: 20,
        color:'#696969'
    },
    icon:{
        paddingRight:20
    }

})